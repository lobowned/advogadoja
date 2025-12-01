import { supabase } from "@/integrations/supabase/client";
import { CaseAnswers } from "@/types/legal-flows";
import { generateProtocolId } from "@/utils/protocol-generator";

export interface SubmitCaseData {
  nicheId: string;
  actionId: string;
  answers: CaseAnswers;
  documents?: File[];
}

export function useSubmitCase() {
  const submitCase = async ({
    nicheId,
    actionId,
    answers,
    documents = [],
  }: SubmitCaseData) => {
    try {
      // 1. Gerar protocolo único
      const protocolId = generateProtocolId();

      // 2. Criar registro do caso
      const { data: caseData, error: caseError } = await supabase
        .from("cases")
        .insert({
          protocol_id: protocolId,
          niche_id: nicheId,
          action_id: actionId,
          status: "novo",
          urgency: answers.urgencia as string || "sem_urgencia",
        })
        .select()
        .single();

      if (caseError) throw caseError;

      // 3. Salvar respostas
      const answersToInsert = Object.entries(answers).map(([key, value]) => ({
        case_id: caseData.id,
        question_id: key,
        question_label: key,
        answer_value: typeof value === 'string' ? value : JSON.stringify(value),
      }));

      const { error: answersError } = await supabase
        .from("case_answers")
        .insert(answersToInsert);

      if (answersError) throw answersError;

      // 4. Upload de documentos
      if (documents.length > 0) {
        for (const file of documents) {
          const filePath = `${protocolId}/${file.name}`;
          
          const { error: uploadError } = await supabase.storage
            .from("case-documents")
            .upload(filePath, file);

          if (uploadError) {
            console.error("Erro ao fazer upload do arquivo:", uploadError);
            continue;
          }

          await supabase.from("case_documents").insert({
            case_id: caseData.id,
            file_name: file.name,
            file_path: filePath,
            file_size: file.size,
            file_type: file.type,
          });
        }
      }

      // 5. Gerar análise preliminar básica
      const complexity = Object.keys(answers).length > 15 ? "alta" : Object.keys(answers).length > 10 ? "media" : "baixa";
      
      const { error: analysisError } = await supabase
        .from("case_analysis")
        .insert({
          case_id: caseData.id,
          complexity,
          risks: [],
          opportunities: [],
          existing_evidences: [],
          missing_evidences: [],
          next_steps: ["Aguardando análise do advogado responsável"],
        });

      if (analysisError) throw analysisError;

      // 6. Enviar notificação por email (via edge function)
      try {
        await supabase.functions.invoke("send-case-notification", {
          body: {
            protocolId,
            nicheId,
            actionId,
            urgency: answers.urgencia,
            clientName: answers.nome_completo,
            clientEmail: answers.email,
            clientPhone: answers.telefone,
          },
        });
      } catch (emailError) {
        console.error("Erro ao enviar notificação:", emailError);
        // Não falha o processo se email não funcionar
      }

      return { 
        success: true, 
        protocolId, 
        caseId: caseData.id 
      };
    } catch (error) {
      console.error("Erro ao submeter caso:", error);
      throw error;
    }
  };

  return { submitCase };
}

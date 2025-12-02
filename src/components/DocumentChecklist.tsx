import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Send, Check, AlertCircle, Info } from "lucide-react";
import { DocumentChecklist as ChecklistType, getChecklistByProblem } from "@/data/document-checklists";
import { cn } from "@/lib/utils";

interface DocumentChecklistProps {
  problem: string | null;
  onRequestWhatsApp?: () => void;
  className?: string;
}

export const DocumentChecklist = ({ problem, onRequestWhatsApp, className }: DocumentChecklistProps) => {
  const checklist = getChecklistByProblem(problem);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  
  if (!checklist) return null;
  
  const toggleItem = (doc: string) => {
    setCheckedItems(prev => {
      const next = new Set(prev);
      if (next.has(doc)) {
        next.delete(doc);
      } else {
        next.add(doc);
      }
      return next;
    });
  };
  
  const totalItems = checklist.obrigatorios.length + checklist.recomendados.length;
  const checkedCount = checkedItems.size;
  const progress = (checkedCount / totalItems) * 100;
  
  return (
    <Card className={cn("max-w-md shadow-lg border-primary/20", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          {checklist.title}
        </CardTitle>
        
        {/* Progress bar */}
        <div className="mt-2">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>{checkedCount} de {totalItems} documentos</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Documentos obrigatórios */}
        <div>
          <h4 className="text-sm font-semibold text-red-600 flex items-center gap-1 mb-2">
            <AlertCircle className="w-4 h-4" />
            Obrigatórios
          </h4>
          <div className="space-y-2">
            {checklist.obrigatorios.map((item, idx) => (
              <ChecklistItem
                key={idx}
                doc={item.doc}
                tip={item.tip}
                checked={checkedItems.has(item.doc)}
                onToggle={() => toggleItem(item.doc)}
                required
              />
            ))}
          </div>
        </div>
        
        {/* Documentos recomendados */}
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground flex items-center gap-1 mb-2">
            <Info className="w-4 h-4" />
            Recomendados
          </h4>
          <div className="space-y-2">
            {checklist.recomendados.map((item, idx) => (
              <ChecklistItem
                key={idx}
                doc={item.doc}
                tip={item.tip}
                checked={checkedItems.has(item.doc)}
                onToggle={() => toggleItem(item.doc)}
              />
            ))}
          </div>
        </div>
        
        {/* Prazo info */}
        {(checklist.prazoMedio || checklist.prazoLimite) && (
          <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-2">
            {checklist.prazoLimite && (
              <p>⏰ <strong>Prazo limite:</strong> {checklist.prazoLimite}</p>
            )}
            {checklist.prazoMedio && (
              <p>📅 <strong>Tempo médio:</strong> {checklist.prazoMedio}</p>
            )}
          </div>
        )}
        
        {/* Action button */}
        {onRequestWhatsApp && (
          <Button 
            className="w-full mt-2"
            onClick={onRequestWhatsApp}
          >
            <Send className="w-4 h-4 mr-2" />
            Enviar lista pro meu WhatsApp
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

interface ChecklistItemProps {
  doc: string;
  tip: string;
  checked: boolean;
  onToggle: () => void;
  required?: boolean;
}

const ChecklistItem = ({ doc, tip, checked, onToggle, required }: ChecklistItemProps) => {
  return (
    <div 
      className={cn(
        "flex items-start gap-2 p-2 rounded-lg cursor-pointer transition-colors",
        checked ? "bg-green-50" : "hover:bg-muted/50"
      )}
      onClick={onToggle}
    >
      <Checkbox 
        checked={checked}
        onCheckedChange={onToggle}
        className="mt-0.5"
      />
      <div className="flex-1 min-w-0">
        <p className={cn(
          "text-sm",
          checked && "line-through text-muted-foreground"
        )}>
          {doc}
          {required && !checked && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          💡 {tip}
        </p>
      </div>
      {checked && (
        <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
      )}
    </div>
  );
};

// Versão compacta para mostrar no chat
export const DocumentChecklistCompact = ({ problem }: { problem: string | null }) => {
  const checklist = getChecklistByProblem(problem);
  
  if (!checklist) return null;
  
  return (
    <div className="bg-white/95 rounded-lg p-3 shadow-sm border border-primary/10 text-xs max-w-xs">
      <p className="font-medium text-primary mb-2 flex items-center gap-1">
        <FileText className="w-3.5 h-3.5" />
        Documentos necessários:
      </p>
      <ul className="space-y-1 text-muted-foreground">
        {checklist.obrigatorios.slice(0, 3).map((item, idx) => (
          <li key={idx} className="flex items-center gap-1">
            <span className="text-red-500">•</span> {item.doc}
          </li>
        ))}
      </ul>
      {checklist.obrigatorios.length > 3 && (
        <p className="text-primary/70 mt-1">
          +{checklist.obrigatorios.length - 3} mais...
        </p>
      )}
    </div>
  );
};

export default DocumentChecklist;

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      case_analysis: {
        Row: {
          case_id: string
          complexity: string | null
          existing_evidences: Json | null
          generated_at: string | null
          id: string
          missing_evidences: Json | null
          next_steps: Json | null
          opportunities: Json | null
          risks: Json | null
        }
        Insert: {
          case_id: string
          complexity?: string | null
          existing_evidences?: Json | null
          generated_at?: string | null
          id?: string
          missing_evidences?: Json | null
          next_steps?: Json | null
          opportunities?: Json | null
          risks?: Json | null
        }
        Update: {
          case_id?: string
          complexity?: string | null
          existing_evidences?: Json | null
          generated_at?: string | null
          id?: string
          missing_evidences?: Json | null
          next_steps?: Json | null
          opportunities?: Json | null
          risks?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "case_analysis_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
        ]
      }
      case_answers: {
        Row: {
          answer_value: string | null
          case_id: string
          created_at: string | null
          id: string
          question_id: string
          question_label: string
        }
        Insert: {
          answer_value?: string | null
          case_id: string
          created_at?: string | null
          id?: string
          question_id: string
          question_label: string
        }
        Update: {
          answer_value?: string | null
          case_id?: string
          created_at?: string | null
          id?: string
          question_id?: string
          question_label?: string
        }
        Relationships: [
          {
            foreignKeyName: "case_answers_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
        ]
      }
      case_documents: {
        Row: {
          case_id: string
          file_name: string
          file_path: string
          file_size: number | null
          file_type: string | null
          id: string
          uploaded_at: string | null
        }
        Insert: {
          case_id: string
          file_name: string
          file_path: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          uploaded_at?: string | null
        }
        Update: {
          case_id?: string
          file_name?: string
          file_path?: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          uploaded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "case_documents_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
        ]
      }
      cases: {
        Row: {
          action_id: string
          created_at: string | null
          id: string
          niche_id: string
          protocol_id: string
          status: string | null
          updated_at: string | null
          urgency: string | null
        }
        Insert: {
          action_id: string
          created_at?: string | null
          id?: string
          niche_id: string
          protocol_id: string
          status?: string | null
          updated_at?: string | null
          urgency?: string | null
        }
        Update: {
          action_id?: string
          created_at?: string | null
          id?: string
          niche_id?: string
          protocol_id?: string
          status?: string | null
          updated_at?: string | null
          urgency?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          assigned_lawyer: string | null
          case_details: Json | null
          case_summary: string | null
          conversation_history: Json | null
          created_at: string | null
          dynamic_lawyer: Json | null
          email: string | null
          id: string
          message_count: number | null
          name: string | null
          notification_sent: boolean | null
          notification_sent_at: string | null
          pending_transfer_lawyer: string | null
          phone: string | null
          problem_type: string | null
          session_id: string | null
          specialty: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          assigned_lawyer?: string | null
          case_details?: Json | null
          case_summary?: string | null
          conversation_history?: Json | null
          created_at?: string | null
          dynamic_lawyer?: Json | null
          email?: string | null
          id?: string
          message_count?: number | null
          name?: string | null
          notification_sent?: boolean | null
          notification_sent_at?: string | null
          pending_transfer_lawyer?: string | null
          phone?: string | null
          problem_type?: string | null
          session_id?: string | null
          specialty?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          assigned_lawyer?: string | null
          case_details?: Json | null
          case_summary?: string | null
          conversation_history?: Json | null
          created_at?: string | null
          dynamic_lawyer?: Json | null
          email?: string | null
          id?: string
          message_count?: number | null
          name?: string | null
          notification_sent?: boolean | null
          notification_sent_at?: string | null
          pending_transfer_lawyer?: string | null
          phone?: string | null
          problem_type?: string | null
          session_id?: string | null
          specialty?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

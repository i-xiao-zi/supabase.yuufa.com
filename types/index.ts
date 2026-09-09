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
    PostgrestVersion: "14.5"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      note_contents: {
        Row: {
          content: string
          created_at: string | null
          deleted_at: string | null
          id: number
          sort: number
          type_id: number
          updated_at: string | null
        }
        Insert: {
          content?: string
          created_at?: string | null
          deleted_at?: string | null
          id?: number
          sort?: number
          type_id?: number
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          deleted_at?: string | null
          id?: number
          sort?: number
          type_id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      note_types: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: number
          name: string
          parent_id: number
          sort: number
          type: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: number
          name?: string
          parent_id?: number
          sort?: number
          type?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: number
          name?: string
          parent_id?: number
          sort?: number
          type?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      searchor_types: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: number
          name: string
          sort: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: number
          name?: string
          sort?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: number
          name?: string
          sort?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      searchors: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          icon: string
          id: number
          name: string
          sort: number
          type: number
          updated_at: string | null
          value: string
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          icon?: string
          id?: number
          name?: string
          sort?: number
          type?: number
          updated_at?: string | null
          value?: string
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          icon?: string
          id?: number
          name?: string
          sort?: number
          type?: number
          updated_at?: string | null
          value?: string
        }
        Relationships: []
      }
      video_errors: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          error: string
          id: number
          origin_id: number
          updated_at: string | null
          url: string
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          error?: string
          id?: number
          origin_id?: number
          updated_at?: string | null
          url?: string
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          error?: string
          id?: number
          origin_id?: number
          updated_at?: string | null
          url?: string
        }
        Relationships: []
      }
      video_origins: {
        Row: {
          active: boolean
          crawled_at: string | null
          created_at: string | null
          deleted_at: string | null
          home: string
          id: number
          name: string
          sort: number
          title: string
          updated_at: string | null
          url: string
        }
        Insert: {
          active?: boolean
          crawled_at?: string | null
          created_at?: string | null
          deleted_at?: string | null
          home?: string
          id?: number
          name?: string
          sort?: number
          title?: string
          updated_at?: string | null
          url?: string
        }
        Update: {
          active?: boolean
          crawled_at?: string | null
          created_at?: string | null
          deleted_at?: string | null
          home?: string
          id?: number
          name?: string
          sort?: number
          title?: string
          updated_at?: string | null
          url?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          actor: string
          area: string
          author: string
          behind: string
          blurb: string
          content: string
          created_at: string | null
          deleted_at: string | null
          director: string
          douban_id: number
          douban_score: string
          en: string
          id: number
          isend: number
          lang: string
          name: string
          origin_id: number
          pic: string | null
          pubdate: string
          remarks: string
          state: string
          sub: string | null
          tags: string | null
          time: number
          total: number
          type_id: number
          updated_at: string | null
          urls: string
          version: string
          vod_id: number
          writer: string
          year: string
        }
        Insert: {
          actor?: string
          area?: string
          author?: string
          behind?: string
          blurb?: string
          content?: string
          created_at?: string | null
          deleted_at?: string | null
          director?: string
          douban_id?: number
          douban_score?: string
          en?: string
          id?: number
          isend?: number
          lang?: string
          name?: string
          origin_id?: number
          pic?: string | null
          pubdate?: string
          remarks?: string
          state?: string
          sub?: string | null
          tags?: string | null
          time?: number
          total?: number
          type_id?: number
          updated_at?: string | null
          urls?: string
          version?: string
          vod_id?: number
          writer?: string
          year?: string
        }
        Update: {
          actor?: string
          area?: string
          author?: string
          behind?: string
          blurb?: string
          content?: string
          created_at?: string | null
          deleted_at?: string | null
          director?: string
          douban_id?: number
          douban_score?: string
          en?: string
          id?: number
          isend?: number
          lang?: string
          name?: string
          origin_id?: number
          pic?: string | null
          pubdate?: string
          remarks?: string
          state?: string
          sub?: string | null
          tags?: string | null
          time?: number
          total?: number
          type_id?: number
          updated_at?: string | null
          urls?: string
          version?: string
          vod_id?: number
          writer?: string
          year?: string
        }
        Relationships: []
      }
      younongpais: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: number
          name: string
          phone: string
          pwd: string
          token: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: number
          name?: string
          phone?: string
          pwd?: string
          token?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: number
          name?: string
          phone?: string
          pwd?: string
          token?: string
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
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
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const

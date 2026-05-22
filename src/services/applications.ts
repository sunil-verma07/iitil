// src/services/applications.ts
import { supabase } from '../lib/supabase';
import type {
  Application,
  ApplicationInsert,
  ApplicationStatus,
  ApplicationFilters,
} from '../types';

export const applicationsService = {
  // ── Public ──────────────────────────────────────────────────

  async submit(
    application: Omit<ApplicationInsert, 'resume_url' | 'resume_filename'>,
    resumeFile?: File
  ): Promise<Application> {
    let resume_url: string | undefined;
    let resume_filename: string | undefined;

    if (resumeFile) {
      const ext = resumeFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(fileName, resumeFile, {
          cacheControl: '3600',
          upsert: false,
          contentType: resumeFile.type,
        });

      if (uploadError) throw uploadError;

      resume_url = fileName; // store path; generate signed URL on demand
      resume_filename = resumeFile.name;
    }

    const { data, error } = await supabase
      .from('applications')
      .insert({ ...application, resume_url, resume_filename })
      .select()
      .single();

    if (error) throw error;
    return data as Application;
  },

  // ── Admin ───────────────────────────────────────────────────

  async getAll(filters?: ApplicationFilters): Promise<Application[]> {
    let query = supabase
      .from('applications')
      .select(
        `*, job:jobs(id, title, department)`
      )
      .order('created_at', { ascending: false });

    if (filters?.status) query = query.eq('status', filters.status);
    if (filters?.job_id) query = query.eq('job_id', filters.job_id);
    if (filters?.search) {
      query = query.or(
        `full_name.ilike.%${filters.search}%,email.ilike.%${filters.search}%`
      );
    }

    const { data, error } = await query;
    if (error) throw error;
    return data as Application[];
  },

  async updateStatus(id: string, status: ApplicationStatus): Promise<void> {
    const { error } = await supabase
      .from('applications')
      .update({ status })
      .eq('id', id);
    if (error) throw error;
  },

  async updateNotes(id: string, notes: string): Promise<void> {
    const { error } = await supabase
      .from('applications')
      .update({ notes })
      .eq('id', id);
    if (error) throw error;
  },

  async getResumeUrl(path: string): Promise<string> {
    const { data, error } = await supabase.storage
      .from('resumes')
      .createSignedUrl(path, 60 * 60); // 1 hour
    if (error) throw error;
    return data.signedUrl;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from('applications').delete().eq('id', id);
    if (error) throw error;
  },
};

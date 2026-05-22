// src/services/jobs.ts
import { supabase } from '../lib/supabase';
import type { Job, JobInsert, JobUpdate, JobFilters } from '../types';

export const jobsService = {
  // ── Public ──────────────────────────────────────────────────

  async getPublished(filters?: JobFilters): Promise<Job[]> {
    let query = supabase
      .from('jobs')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (filters?.search) {
      query = query.or(
        `title.ilike.%${filters.search}%,department.ilike.%${filters.search}%,description.ilike.%${filters.search}%`
      );
    }
    if (filters?.department) {
      query = query.eq('department', filters.department);
    }
    if (filters?.employment_type) {
      query = query.eq('employment_type', filters.employment_type);
    }
    if (filters?.location) {
      query = query.ilike('location', `%${filters.location}%`);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data as Job[];
  },

  async getById(id: string): Promise<Job | null> {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as Job;
  },

  // ── Admin ───────────────────────────────────────────────────

  async getAll(): Promise<Job[]> {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as Job[];
  },

  async create(job: JobInsert): Promise<Job> {
    const { data, error } = await supabase
      .from('jobs')
      .insert(job)
      .select()
      .single();
    if (error) throw error;
    return data as Job;
  },

  async update(id: string, updates: JobUpdate): Promise<Job> {
    const { data, error } = await supabase
      .from('jobs')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as Job;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from('jobs').delete().eq('id', id);
    if (error) throw error;
  },

  async togglePublish(id: string, is_published: boolean): Promise<Job> {
    return jobsService.update(id, { is_published });
  },
};

// src/types/index.ts

export type EmploymentType =
  | 'Full-time'
  | 'Part-time'
  | 'Contract'
  | 'Internship'
  | 'Remote';

export type ApplicationStatus =
  | 'pending'
  | 'reviewing'
  | 'shortlisted'
  | 'rejected'
  | 'hired';

// ─── Job ────────────────────────────────────────────────────
export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  employment_type: EmploymentType;
  experience: string;
  description: string;
  responsibilities?: string;
  requirements?: string;
  skills: string[];
  salary_range?: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export type JobInsert = Omit<Job, 'id' | 'created_at' | 'updated_at'>;
export type JobUpdate = Partial<JobInsert>;

// ─── Application ─────────────────────────────────────────────
export interface Application {
  id: string;
  job_id: string;
  full_name: string;
  email: string;
  phone?: string;
  experience_years?: number;
  portfolio_url?: string;
  cover_letter?: string;
  resume_url?: string;
  resume_filename?: string;
  status: ApplicationStatus;
  notes?: string;
  created_at: string;
  updated_at: string;
  // joined
  job?: Pick<Job, 'id' | 'title' | 'department'>;
}

export type ApplicationInsert = Omit<
  Application,
  'id' | 'status' | 'notes' | 'created_at' | 'updated_at' | 'job'
>;

// ─── Admin User ───────────────────────────────────────────────
export interface AdminUser {
  id: string;
  email: string;
  full_name?: string;
  role: 'hr' | 'super_admin';
  created_at: string;
}

// ─── Filters ──────────────────────────────────────────────────
export interface JobFilters {
  search?: string;
  department?: string;
  employment_type?: EmploymentType | '';
  location?: string;
}

export interface ApplicationFilters {
  status?: ApplicationStatus | '';
  job_id?: string;
  search?: string;
}

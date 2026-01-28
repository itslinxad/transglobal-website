// Service Types
export interface Service {
  id: string;
  title: string;
  slug: string;
  category: 'freight' | 'moving';
  icon: string; // Font Awesome class (e.g., 'fa-plane')
  shortDescription: string;
  fullDescription: string;
  features: string[];
  process: ProcessStep[];
  benefits: Benefit[];
}

export interface ProcessStep {
  step: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role?: string;
  content: string;
  rating?: number;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Stat Counter Types
export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  icon: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  path: string;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

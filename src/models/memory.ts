export interface MemoryPreview {
  id: string;
  coverUrl?: string;
  excerpt: string;
  date: string;
}

export interface Memory {
  id: string;
  coverUrl?: string;
  content: string;
  date: string;
  createdAt: string;
  isPublic: boolean;
}

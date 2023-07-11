export interface MemoryPreview {
  id: string;
  coverUrl?: string;
  excerpt: string;
  createdAt: string;
}

export interface Memory {
  id: string;
  coverUrl?: string;
  content: string;
  createdAt: string;
  isPublic: boolean;
}

import { cookies } from 'next/headers';

import { InnerPageContainer } from '@/components/InnerPageContainer';
import { MemoryForm } from '@/components/MemoryForm';
import { Memory } from '@/models/memory';
import { api } from '@/lib/api';

interface NewMemoryProps {
  params: { id: string };
}

export default async function NewMemory({ params }: NewMemoryProps) {
  const token = cookies().get('token')?.value;

  const response = await api.get(`/memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const memory: Memory = response.data;

  return (
    <InnerPageContainer>
      <MemoryForm memory={memory} />
    </InnerPageContainer>
  );
}

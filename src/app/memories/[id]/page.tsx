import { cookies } from 'next/headers';

import { api } from '@/lib/api';
import { MemoryComponent } from '@/components/Memory';
import { Memory } from '@/models/memory';
import { InnerPageContainer } from '@/components/InnerPageContainer';

interface MemoryByIdProps {
  params: { id: string };
}

export default async function MemoryById({ params }: MemoryByIdProps) {
  const token = cookies().get('token')?.value;

  const response = await api.get(`/memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const memory: Memory = response.data;

  return (
    <InnerPageContainer>
      <MemoryComponent memory={memory} />
    </InnerPageContainer>
  );
}

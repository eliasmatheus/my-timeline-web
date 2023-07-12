'use client';

import { ImagePlus } from 'lucide-react';
import { MediaPicker } from './MediaPicker';
import { FormEvent, useEffect } from 'react';
import { api } from '@/lib/api';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import { Memory } from '@/models/memory';
import dayjs from 'dayjs';

interface NewMemoryFormProps {
  memory?: Memory;
}

export function MemoryForm({ memory }: NewMemoryFormProps) {
  const router = useRouter();
  const formattedDate = dayjs(memory?.date ?? new Date()).format('YYYY-MM-DD');

  useEffect(() => {
    // Força o refresh da página para mostrar alterações em deselvolvimento
    router.refresh();
  }, [router]);

  async function getCoverUrl(formData: FormData) {
    const fileToUpload = formData.get('coverUrl') as File | null;
    let coverUrl = memory?.coverUrl ?? '';

    if (
      fileToUpload &&
      fileToUpload.name !== 'reset.jpeg' &&
      fileToUpload.name !== ''
    ) {
      const uploadFormData = new FormData();

      uploadFormData.set('file', fileToUpload as File);

      const uploadResponse = await api.post('/upload', uploadFormData);

      coverUrl = uploadResponse.data.fileUrl;
    }

    if (fileToUpload?.name === 'reset.jpeg') {
      coverUrl = '';
    }

    return coverUrl;
  }

  function getFormDate(formData: FormData) {
    const input = formData.get('date')?.toString() ?? '';

    return dayjs(input).toDate();
  }

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const coverUrl = await getCoverUrl(formData);

    const token = Cookie.get('token');
    const body = {
      coverUrl,
      content: formData.get('content'),
      isPublic: formData.get('isPublic') === 'true',
      date: getFormDate(formData),
    };
    const headers = { Authorization: `Bearer ${token}` };

    if (memory) {
      await api.put(`/memories/${memory.id}`, body, { headers });
      router.push(`/memories/${memory.id}`);

      return;
    }

    memory = await api.post('/memories', body, { headers });

    const redirectTo = memory?.id ? `/memories/${memory.id}` : '/';

    memory?.id ?? router.push(redirectTo);
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex flex-wrap items-center gap-4 gap-x-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-400 hover:text-gray-300"
        >
          <ImagePlus className="h-4 w-4" />
          Anexar mídia
        </label>

        <label
          htmlFor="date"
          className="flex w-fit cursor-pointer items-center gap-1.5 text-sm text-gray-400 hover:text-gray-300"
        >
          <input
            type="date"
            name="date"
            id="date"
            className="block w-[130px] rounded-lg border border-gray-600 bg-slate-100 px-2.5 py-1 text-sm text-gray-600 focus:border-red-500 focus:ring-red-500"
            defaultValue={formattedDate}
          />
          Selecione a data
        </label>

        <label
          htmlFor="isPublic"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-400 hover:text-gray-300"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            defaultChecked={memory?.isPublic}
            className="h-4 w-4 rounded border-gray-400 bg-gray-300 text-red-500"
          />
          Tornar memória publica
        </label>
      </div>

      {/* Input invisível ou preview */}
      <MediaPicker defaultMedia={memory?.coverUrl} />

      <textarea
        name="content"
        spellCheck={false}
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-600 placeholder:text-gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre..."
        defaultValue={memory?.content}
      />

      <button
        className="inline-block self-end rounded-full bg-red-600 px-5 py-3 font-alt text-sm uppercase leading-none tracking-wide text-white transition-colors hover:bg-red-700"
        type="submit"
      >
        Salvar
      </button>
    </form>
  );
}

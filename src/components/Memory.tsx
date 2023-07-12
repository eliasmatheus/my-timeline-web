// @refresh reset

import Link from 'next/link';
import Image from 'next/image';
import { Memory } from '@/models/memory';
import dayjs from 'dayjs';

interface MemoryProps {
  memory: Memory;
}

export function MemoryComponent({ memory }: MemoryProps) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <div className="w-full space-y-4">
          <div className="flex justify-between">
            <time className="flex items-center gap-2 text-sm">
              {dayjs(memory.date).format('D[ de ] MMMM[, ] YYYY')}
            </time>

            <div className="flex gap-2">
              <Link
                href={`/memories/${memory.id}`}
                className="inline-block self-end rounded-full border border-red-600 px-4 py-2 font-alt text-sm uppercase leading-none tracking-wide text-red-600 transition-colors hover:bg-red-700  hover:text-white"
              >
                Deletar
              </Link>

              <Link
                href={`/memories/edit/${memory.id}`}
                className="inline-block self-end rounded-full border border-red-600 bg-red-600 px-4 py-2 font-alt text-sm uppercase leading-none tracking-wide text-white transition-colors hover:bg-red-700"
              >
                Editar
              </Link>
            </div>
          </div>

          {memory.coverUrl && (
            <Image
              src={memory.coverUrl}
              width={592}
              height={280}
              className="aspect-video w-full rounded-lg object-cover"
              alt=""
            />
          )}

          <p className="whitespace-pre-wrap text-lg leading-relaxed text-gray-400">
            {memory.content}
          </p>
        </div>
      </div>
    </div>
  );
}

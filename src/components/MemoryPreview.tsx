import { MemoryPreview } from '@/models/memory';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import ptBr from 'dayjs/locale/pt-br';
import { ArrowRight } from 'lucide-react';

dayjs.locale(ptBr);

interface MemoryPreviewProps {
  memory: MemoryPreview;
}

export default function MemoryPreviewComponent({ memory }: MemoryPreviewProps) {
  return (
    <div key={memory.id} className="space-y-4">
      <time className="-ml-8 flex items-center gap-2 text-sm before:h-px before:w-5 before:bg-gray-400">
        {dayjs(memory.createdAt).format('D[ de ] MMMM[, ] YYYY')}
      </time>

      {memory.coverUrl && (
        <Link className="block" href={`/memories/${memory.id}`}>
          <Image
            src={memory.coverUrl}
            width={592}
            height={280}
            className="aspect-video w-full rounded-lg object-cover"
            alt=""
          />
        </Link>
      )}

      <p className="text-lg leading-relaxed text-gray-400">{memory.excerpt}</p>

      <Link
        href={`/memories/${memory.id}`}
        className="flex w-fit items-center gap-2 text-sm text-gray-500 hover:text-gray-400"
      >
        Ler mais
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

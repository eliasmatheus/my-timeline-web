import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface InnerPageContainerProps {
  children: ReactNode;
}

export function InnerPageContainer({ children }: InnerPageContainerProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-12 px-10 xl:px-16">
      <Link
        href="/"
        className="-mx-2 flex w-fit items-center gap-1 text-sm text-gray-400 hover:text-gray-300"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      {children}
    </div>
  );
}

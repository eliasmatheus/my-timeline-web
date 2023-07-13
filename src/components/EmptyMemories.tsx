import Link from 'next/link';

function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        Ainda não há lembranças registradas. <br />
        Comece a{' '}
        <Link href="/memories/new" className="underline hover:text-gray-50">
          criar agora
        </Link>{' '}
        mesmo!
      </p>
    </div>
  );
}

export default EmptyMemories;

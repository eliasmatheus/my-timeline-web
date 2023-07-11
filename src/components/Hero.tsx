import Link from 'next/link';

export default function Hero() {
  return (
    <div className="space-y-5">
      <div className="max-w-[420px] space-y-1">
        <h1 className="font-alt text-5xl font-bold leading-tight">
          Sua linha do tempo
        </h1>

        <p className="text-lg leading-relaxed">
          Guarde os momentos mais felizes e marcantes da sua trajetória e
          compartilhe-os com o mundo, se desejar!
        </p>
      </div>

      <Link
        className="inline-block rounded-full bg-blue-500 px-5 py-3 font-alt text-sm font-bold uppercase leading-none tracking-wide text-white transition-colors hover:bg-blue-600"
        href="/memories/new"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  );
}

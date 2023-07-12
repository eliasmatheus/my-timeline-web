import { getUser } from '@/lib/auth';
import Image from 'next/image';

function Profile() {
  const { name, avatarUrl } = getUser();

  return (
    <div className="flex items-center gap-2 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[190px] text-sm leading-snug">
        <span className="font-alt">{name}</span>

        <a
          href="/api/auth/logout"
          className="block text-xs text-red-500 hover:text-red-400"
        >
          Quero sair
        </a>
      </p>
    </div>
  );
}

export default Profile;

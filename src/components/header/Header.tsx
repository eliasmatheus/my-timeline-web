import { cookies } from 'next/headers';
import Image from 'next/image';
import Profile from './Profile';
import SignIn from './SignIn';

import logo from '../../assets/lagomarca-positiva.svg';

export function Header() {
  const isAuthenticated = cookies().has('token');

  return (
    <div className="flex w-full justify-between gap-3 align-middle">
      <Image className="w-[165px]" src={logo} alt="" />

      {isAuthenticated ? <Profile /> : <SignIn />}
    </div>
  );
}

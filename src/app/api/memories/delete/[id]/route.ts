import { api } from '@/lib/api';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params }: Params) {
  const { id } = params;
  const token = cookies().get('token')?.value;

  const redirectURL = new URL('/', req.url);

  await api
    .delete(`/memories/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch(() => {
      redirectURL.pathname = '/';
    });

  return NextResponse.redirect(redirectURL);
}

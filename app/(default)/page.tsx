export const metadata = {
  title: 'Trakfy',
  description: 'Trakfy',
}

import { getUser } from '@/utils/get-user'
import { redirect } from 'next/navigation'

export default async function Home() {
  const user = await getUser();

  if (!user) {
    // redirect('/api/auth/login')
    redirect('/logged')
  } else {
    redirect('/logged')
  }
}
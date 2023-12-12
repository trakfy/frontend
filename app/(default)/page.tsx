export const metadata = {
  title: 'Trakfy',
  description: 'Trakfy',
}

import Logged from '@/components/logged';
import { getUser } from '@/utils/get-user'
import { redirect } from 'next/navigation'

export default async function Home() {
  const user = await getUser();

  if (!user) {
    redirect(process.env.WEBFLOW_URL || '/404')
  } else {
    return (
      <>
        <Logged />
      </>
    )
  }
}
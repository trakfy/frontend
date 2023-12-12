import Logged from "@/components/logged";
import { getUser } from "@/utils/get-user";
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Logged - Trakfy',
  description: 'Logged',
}

export default async function LoggedPage() {
  const user = await getUser();

  if (!user) {
    // redirect('/api/auth/login')
    return (
      <>
        <Logged />
      </>
    )
  } else {
    return (
      <>
        <Logged />
      </>
    )
  }

}

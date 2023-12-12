export default function LoggedLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
      <main className="grow">

        {children}

      </main>
    </>
  )
}

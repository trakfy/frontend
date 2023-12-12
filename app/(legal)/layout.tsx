export default function LegalLayout({
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

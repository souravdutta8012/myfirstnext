import './globals.css';

export const metadata = {
  title: 'WIMS',
  description: 'Woodside Interface Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}

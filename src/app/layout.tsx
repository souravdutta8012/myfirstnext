import './globals.css';
import Header from './components/Header';

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
        <Header />
        {children}
      </body>
    </html>
  )
}

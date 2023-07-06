"use client"
import './globals.css';
import Header from './components/Header';
import { UserProvider } from './util/User';
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import { UnAuthenticatedRedirect } from './auth/unauthenticated-redirect';
import { msalInstance } from './auth/auth-msal';

export const metadata = {
  title: 'WIMS',
  description: 'Woodside Interface Management System',
}

const instance = msalInstance();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <MsalProvider instance={instance}>
          <AuthenticatedTemplate>
            <UserProvider>
              <Header />
              {children}
            </UserProvider>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <UnAuthenticatedRedirect />
          </UnauthenticatedTemplate>
        </MsalProvider>
      </body>
    </html>
  )
}

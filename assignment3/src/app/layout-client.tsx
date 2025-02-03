'use client';
import { AuthProvider } from "./context/authContext";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <AuthProvider>
        {children}
      </AuthProvider>
  );
}
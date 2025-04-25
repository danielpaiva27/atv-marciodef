import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trabalho de Conversores",
  description: "Aplicação de conversores para trabalho de faculdade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
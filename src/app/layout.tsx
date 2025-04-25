import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Trabalho de Atividades",
  description: "Projeto com diversas atividades para aprendizado",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="layout-container">
        <Header />
        <main className="layout-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
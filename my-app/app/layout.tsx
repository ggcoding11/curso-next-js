import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="min-h-full flex flex-col">
        <header className="flex justify-between mx-4 p-2">
          <h1>Minha Loja</h1>

          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>
              <li>
                <Link href="/produtos">Produtos</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>Meu Footer</footer>
      </body>
    </html>
  );
}

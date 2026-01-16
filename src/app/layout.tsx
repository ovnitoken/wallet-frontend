import "./globals.css";

export const metadata = {
  title: "OVNI Wallet",
  description: "Wallet profesional OVNI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}


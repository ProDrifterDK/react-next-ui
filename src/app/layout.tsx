export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <header className="p-4 bg-gray-800 text-white">
          <h1 className="text-lg font-semibold">My Library App</h1>
        </header>
        <main>{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          &copy; 2024 Library App
        </footer>
      </body>
    </html>
  );
}

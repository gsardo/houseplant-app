export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-primary-contrast font-bold bg-primary">
        {children}
    </div>
  );
}
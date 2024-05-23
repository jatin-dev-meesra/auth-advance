export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-m-blue h-full flex items-center justify-center">
      {children}
    </div>
  );
}

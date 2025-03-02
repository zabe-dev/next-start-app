export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex min-h-screen w-[100%] flex-col gap-0">{children}</div>
	);
}

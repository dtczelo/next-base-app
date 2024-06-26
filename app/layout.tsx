import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Next starter template",
	description: "The fastest way to build apps with Next.js and Supabase",
};

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}
		>
			<body className="bg-background text-foreground">
				<main className="min-h-screen flex flex-col items-center">{children}</main>
			</body>
		</html>
	);
}

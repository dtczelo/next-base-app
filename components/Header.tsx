import AuthButton from "@/components/AuthButton";

export default function Header() {
	return (
		<header className="w-full flex justify-center border-b border-b-foreground/10 h-[10vh]">
			<nav className="ml-auto max-w-4xl flex justify-between items-center p-3 text-sm">
				<AuthButton />
			</nav>
		</header>
	);
};

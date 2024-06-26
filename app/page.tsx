import Header from "@/components/Header";

export default async function Index() {
	return (
		<div className="flex-1 w-full flex flex-col gap-20 items-center">
			<Header />

			<main className="w-full h-full flex flex-col justify-center items-center animate-in flex-1 opacity-0">
				<h1 className="font-bold text-4xl mb-4 tracking-wider [word-spacing:12px]">NEXT STARTER TEMPLATE</h1>
				<p>Supabase Auth & ChatGPT connected, it's just work !</p>
			</main>

			<footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
				<p></p>
			</footer>
		</div>
	);
}

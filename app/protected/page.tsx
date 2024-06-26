import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Chat from "@/components/Chat";
import { useEffect, useState } from "react";

export default async function ProtectedPage() {
	const supabase = createClient();

	const {
	  data: { user },
	} = await supabase.auth.getUser();
  
	if (!user) {
	  return redirect("/login");
	}


	return (
		<div className="flex-1 w-full flex flex-col gap-20 items-center">
			<Header />

			<div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
				<main></main>
			</div>

			<aside className="fixed bottom-0 right-0 w-[30vw] h-[90vh] border border-foreground/10">
				<Chat />
			</aside>
		</div>
	);
}

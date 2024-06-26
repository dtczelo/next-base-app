"use client";

import { useChat } from "ai/react";

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();
	return (
		<div className="relative flex flex-col w-full h-full max-w-md p-4 pb-16 mx-auto stretch">
			<div className="flex-1 overflow-auto custom-scrollbar">
				{messages.map((m) => (
					<div key={m.id} className="whitespace-pre-wrap">
						{m.role === "user" ? <span className="text-cyan-500">User: </span> : <span className="text-green-500">AI: </span>}
						{m.content}
					</div>
				))}
			</div>

			<form onSubmit={handleSubmit}>
				<input
					className="fixed bottom-0 flex-1 text-black p-2 mb-4 border border-gray-300 rounded"
					value={input}
					placeholder="Say something..."
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
}

Next Starter template 🚀



## Features

- Auth with supabase
- Ai chatGPT connected, [see lib](https://sdk.vercel.ai/docs/introduction),[see chatGPT docs](https://platform.openai.com/docs/overview)

## Run locally steps

Rename `.env.example` to `.env.local` and update the following:

```
NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
```

Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)
OR when initializing a project.

```
OPENAI_API_KEY=[INSERT CHATGPT API KEY]
```

Run the Next.js local development server:

```bash
npm run dev
```

## Change your GPT model

In app/api/chat/route.ts

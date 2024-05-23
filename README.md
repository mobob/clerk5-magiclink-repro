This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Repo created to repro an issue with clerk 5 - turns out, the crux of the issue is;

- when using magic links
- they don't work when the root / page redirects to a protected page, in this case /venues

I noticed when testing and building this up that when you go to follow a magic link the root page "flashes" to the viewer... that didn't happen before.

I guess its visiting that page and then doing some magic to render the magic link part... but if that page takes you somewhere else it breaks it.

NOTE: copy and fill in .env.local.sample to .env.local to make this repro work.

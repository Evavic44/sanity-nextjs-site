<div align="center"> 
  <img width="200" alt="sanity" src="./public/docs/project-logo.png">
  <h1>Sanity.io + NextJS Portfolio Site</h1>
  <p>A portfolio template built with React, TypeScript and Sanity.io</p>
</div>

This starter is a statically generated personal website that uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content.
It comes with a native Sanity Studio that offers features like real-time collaboration, instant side-by-side content previews, and intuitive editing.

The Studio connects to Sanity Content Lake, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more.
You can use this starter to kick-start a personal website or learn these technologies.

## Features

- A performant, static personal personal website with editable projects
- Manage portfolio content through sanity content lake by visiting `yourwebsite.com/admin`
- Webhook-triggered Conent Update; no need to wait for a rebuild to publish new content
- Built with cutting-edge technologies: Next.js 13, TypeScript, Tailwind CSS

## Project Overview

| [Personal Website](https://nextjs-personal-website.sanity.build) | [Studio](https://nextjs-personal-website.sanity.build/studio) |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| ![Personal Website][site-preview]                                | ![Sanity Studio][studio-preview]                              |

## Configuration

### Step 1. Set up the project locally

[Clone the repository][sanity-nextjs-repo] that was created for you on your GitHub account.

```bash
git clone https://github.com/Evavic44/sanity-nexts-site

cd sanity-nextjs-site
```

### Step 2. Run project locally

```bash
npm install

npm run dev
```

Visit [http://localhost:3000][localhost-3000] to see your site <br />
Visit [http://localhost:3000/studio][localhost-3000-studio] to edit content

## Next steps

- [How to query content?][sanity-groq]
- [Sanity + NextJS Blog Template][other-templates]

<!-- LINK VARIABLES -->

[site-preview]: ./public/docs/website.png
[studio-preview]: ./public/docs/studio.png
[nextjs]: https://github.com/vercel/next.js
[sanity-homepage]: https://www.sanity.io
[sanity-groq]: https://www.sanity.io/docs/groq?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-nextjs-repo]: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
[localhost-3000]: http://localhost:3000
[localhost-3000-studio]: http://localhost:3000/studio
[vercel]: https://vercel.com
[other-templates]: https://github.com/sanity-io/sanity-template-nextjs-appdir-personal-website

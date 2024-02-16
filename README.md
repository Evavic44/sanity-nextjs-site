<div align="center"> 
  <img width="200" alt="sanity" src="https://github.com/Evavic44/sanity-nextjs-site/assets/62628408/27a0746c-addc-478b-b052-9b3890371036">
  <h1>Sanity.io + NextJS </h1>
  <p> <a href="https://nextjs.org">Next.js</a>, <a href="https://tailwindcss.com">Tailwind CSS</a> and <a href="https://sanity.io">Sanity.io</a> for content</p>
</div>

## Funktioner

- En hurtig, statisk personlig hjemmeside med redigerbare indholdstyper
- Webhook-udløst kontinuerlig deployment; Indholdsopdateringer vil automatisk udløse en bygningskommando
- Bygget med topmoderne teknologier: Next.js 14, TypeScript, Tailwind CSS og Sanity.io
- Nextjs Features: 
  - Static Generation, 
  - Server-side Rendering, 
  - Incremental Static Regeneration,
  - TypeScript,
  - API Routes,
  - Image Optimization,
  - Internationalized Routing,
  - Next.js Analytics,
- Framer motion for animations


### Vigtige filer og mapper

| Fil(r)                                                    | Beskrivelse                                   |
| --------------------------------------------------------- | --------------------------------------------- |
| [`sanity.config.ts`](sanity.config.ts)                    | Konfigurationsfil til Sanity Studio           |
| [`sanity.client.ts`](sanity/sanity.client.ts)             | Konfigurationsfil til Sanity CLI              |
| [`studio`](<./app/(studio)/studio/[[...index]]/page.tsx>) | Hvor Sanity Studio er monteret                |
| [`schemas`](./schemas)                                    | Hvor Sanity Studio får sine indholdstyper fra |
| [`sanity.query.ts`](./sanity/sanity.query.ts)             | Hvor Sanity-data beskrives og hentes          |
| [`structure.ts`](./structure.js)                          | Opbygning af sanity menu                      |


Besøg [http://localhost:3000][localhost-3000] for at se din hjemmeside <br />
Besøg [http://localhost:3000/studio][localhost-3000-studio] for at redigere indhold

## Next steps

- [How to query content?][sanity-groq]
- [Sanity + NextJS Blog Template][other-templates]

## Licens
nst-labs er licenseret ved superego group og må ikke kopieres eller distribueres uden tilladelse fra supere1go group.
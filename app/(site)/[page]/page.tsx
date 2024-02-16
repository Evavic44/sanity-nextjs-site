import Image from "next/image";
import { Metadata } from "next";
import { getSinglePage, getPageBuilder } from "@/sanity/sanity.query";
import type { page } from "@/types";

type Props = {
  params: {
    page: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.page;
  const page: page = await getSinglePage(slug);

  return {
/*     title: `${page.title} | page`,
 */  };
}

export default async function page({ params }: Props) {
  const slug = params.page;
  const page: page = await getSinglePage(slug);
  const pageBuilder = await getPageBuilder();
  return (
    <main className="max-w-6xl px-8 mx-auto lg:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
        {page && page.title && (
          <h1 className="mb-4 text-3xl font-bold lg:text-5xl lg:leading-tight">
            {page.title}
          </h1>
        )}
        </div>
        <div className="flex flex-col mt-8 leading-7 gap-y-6 text-zinc-400">
          {/* <PortableText value={page.description} /> */}
        </div>
      </div>
      
      
    </main>
  );
}

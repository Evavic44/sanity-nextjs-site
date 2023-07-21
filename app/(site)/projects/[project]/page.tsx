import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "@/public/project.png";

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images:
        project.coverImage?.image ||
        "https://res.cloudinary.com/victoreke/image/upload/v1689892912/docs/project.png",
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {project.name}
          </h1>

          <a
            href={project.projectUrl}
            rel="noreferrer noopener"
            className="dark:bg-[#1d1d20] bg-zinc-50 dark:text-white text-zinc-600 dark:hover:border-zinc-700 hover:border-zinc-200 border border-transparent rounded-md px-4 py-2"
          >
            Explore
          </a>
        </div>

        <Image
          className="rounded-xl border dark:border-zinc-800 border-zinc-100"
          width={900}
          height={460}
          src={project.coverImage?.image || fallBackImage}
          alt={project.coverImage?.alt || project.name}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 dark:text-zinc-400 text-zinc-600">
          <PortableText value={project.description} />
        </div>
      </div>
    </main>
  );
}

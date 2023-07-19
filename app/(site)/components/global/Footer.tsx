import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-44">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16">
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 text-sm font-light duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 text-sm font-light duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-400 text-sm font-light duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 text-sm font-light duration-300"
              >
                Gear
              </Link>
            </li>
          </ul>
        </nav>

        <small className="text-zinc-500">
          <a
            href="https://github.com/Evavic44/sanity-nextjs-site"
            target="_blank"
            rel="noreferrer noopener"
          >
            Sanity + NextJS Portfolio Template
          </a>
        </small>
      </div>
    </footer>
  );
}

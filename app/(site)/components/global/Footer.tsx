export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-44">
      <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto max-w-7xl lg:flex-row lg:justify-between gap-y-4 md:px-16 text-zinc-400">
        <small className="font-mono duration-200 ">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>

        <small className="duration-200 hover:text-white">
          <a
            href="https://github.com/Evavic44/sanity-nextjs-site"
            target="_blank"
            rel="noreferrer noopener"
          >
            Website by Superego
          </a>
        </small>
      </div>
    </footer>
  );
}

import { AnimatePresence } from "framer-motion";

export default async function home() {
  return (
      <main className="max-w-6xl px-8 mx-auto lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-4">
            <h1 className="mb-4 text-3xl font-bold lg:text-5xl lg:leading-tight">
              hello world
            </h1>
          </div>
        </div>
      </main>
  );
}

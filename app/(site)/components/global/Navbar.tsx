"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";
/* import { getNavigation } from "@/sanity/sanity.query"; */
import Menu from "@/app/(site)/components/global/Menu";
import { Suspense } from "react";
import * as React from "react";

import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCloseNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 right-0 w-full py-4 overflow-hidden se-grid z-[9999999999]">
        <div className="col-span-3 col-start-1">
          <Link href="/">
            {/* <Image src={Logo} width={25} height={25} alt="logo" /> */}
            logo
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[9999999999] -col-start-1 -col-end-1"
        >
          {!isOpen && <span>open menu</span>}
          {isOpen && <span className="text-slate-900">close menu</span>}
        </button>
      </header>
      <AnimatePresence mode="wait">
        {isOpen && <Menu onClose={handleCloseNav} />}
      </AnimatePresence>
    </>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getNavigation } from "@/sanity/sanity.query";
import type { NavigationType } from "@/types";
import { motion } from "framer-motion";

export default function Menu({ onClose }: { onClose: () => void }) {

  const [navigation, setNavigation] = React.useState<NavigationType[]>([]);

  useEffect(() => {
    getNavigation().then((nav) => setNavigation(nav));
  }, []); 
  const [activeLinkId, setActiveLinkId] = React.useState("");

  const toggleActiveLink = (linkId: string) => {
    setActiveLinkId((prevLinkId) => (prevLinkId === linkId ? "" : linkId));
  };


  return (
    <>
      <motion.nav
      initial={{ x: "100%" }}
      transition={{stiffness: 100}}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
       className="fixed z-top top-0 right-0 w-screen h-screen sm:w-[50vw] md:w-[33vw] bg-slate-50">
        <div className="h-full px-6 pb-6 overflow-auto md:px-24 lg:px-19 xl:px-16 xl:pr-36 sm:px-13 pt-44 sm:pt-32 md:pt-28 lg:pt-28">
          {navigation.map((nav) => (
            <ul className="space-y-8 text-4xl text-slate-900 ">
              {nav.links.slice(0).map((link) => (
                <motion.li
                initial={{ opacity: 0, x: 20}}
                animate={{ opacity: 1, x: 0}}
                exit={{ opacity: 0, x: 20, transition: { delay: 0.2, duration: 0.1} }}
                transition={{ duration: 0.5, stiffness: 100}}
                  key={link._key}
                  className='border-b-2 border-slate-900  {
                    link.subLinks && link.subLinks.length > 0
                      ? "has-children"
                      : "has-no-children"
                  }'
                >
                  {link.subLinks && link.subLinks.length > 0 ? ( // if there are sublinks
                    <button
                      className="text-left"
                      onClick={() => toggleActiveLink(link._key)}
                    >
                      {link.title}
                    </button>
                  ) : (
                    <Link
                      onClick={onClose}
                      href={`${link.path}`} title={link.title}>
                      {link.title}
                    </Link>
                  )}

                  {/*
                   * Start of sublinks
                   */}
                  {link.subLinks &&
                    link.subLinks.length > 0 &&
                    activeLinkId === link._key && (
                      <ul className="mt-2 space-y-2">
                        {link.subLinks.map((subLink) => (
                          <li
                            onClick={onClose}
                            key={subLink._key}
                            className="border-b-2 border-slate-900 last-of-type:border-b-0"
                          >
                            <Link
                              href={`${subLink.subRoute}`}
                              title={subLink.subTitle}
                            >
                              {subLink.subTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  {/*
                   * End of sublinks
                   */}
                </motion.li>
              ))}
            </ul>
          ))}
        </div>
      </motion.nav>
    </>
  );
}

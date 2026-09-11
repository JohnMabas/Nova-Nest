"use client";

import { useState } from "react";
import { Icon } from "@iconify/react/offline";
import menuIcon from "@iconify-icons/mdi/menu";
import closeIcon from "@iconify-icons/mdi/close";
import { NAV_LINKS } from "@/data/content";
import { Logo, OutlineButton, PrimaryButton } from "@/components/ui";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/20 backdrop-blur-[30px]">
      <div className="mx-auto flex h-[110px] w-full max-w-[1728px] items-center justify-between gap-6 px-5 md:px-8 xl:px-[30px]">
        <Logo />

        <nav className="hidden items-center gap-[70px] lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium leading-[25px] text-nest-tiffany transition hover:text-nest-mint"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <PrimaryButton size="sm">Explore Properties</PrimaryButton>
          <OutlineButton size="sm">Contact Us</OutlineButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-nest-tiffany/40 text-nest-mint lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon icon={open ? closeIcon : menuIcon} className="text-2xl" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-nest-bg/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-nest-tiffany"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton size="sm" className="w-full sm:w-auto">
              Explore Properties
            </PrimaryButton>
            <OutlineButton size="sm" className="w-full sm:w-auto">
              Contact Us
            </OutlineButton>
          </div>
        </div>
      )}
    </header>
  );
}

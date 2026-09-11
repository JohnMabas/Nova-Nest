"use client";

import { Icon } from "@iconify/react/offline";
import twitterIcon from "@iconify-icons/mdi/twitter";
import youtubeIcon from "@iconify-icons/mdi/youtube";
import instagramIcon from "@iconify-icons/mdi/instagram";
import linkedinIcon from "@iconify-icons/mdi/linkedin";
import { FOOTER_LINKS } from "@/data/content";
import { Logo } from "@/components/ui";

const SOCIAL = [
  { icon: twitterIcon, href: "https://twitter.com", label: "X" },
  { icon: youtubeIcon, href: "https://youtube.com", label: "YouTube" },
  { icon: instagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: linkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
];

function LinkColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-[25px]">
      <h3 className="text-[21px] font-medium leading-[130%] text-nest-mint">
        {title}
      </h3>
      <ul className="flex flex-col gap-[15px]">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm leading-[160%] text-nest-tiffany transition hover:text-nest-mint"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-black/20 backdrop-blur-[30px]">
      <div className="container-content flex flex-col gap-[100px] py-20 md:py-28">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-[100px]">
          <Logo />
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3">
            <LinkColumn title="Quick Links" links={FOOTER_LINKS.quick} />
            <LinkColumn title="Company Info" links={FOOTER_LINKS.company} />
            <LinkColumn title="Popular Searches" links={FOOTER_LINKS.searches} />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-base leading-[130%] text-nest-tiffany">
            Design by Seda Sen
          </p>
          <div className="flex items-center gap-[26px]">
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="text-nest-tiffany transition hover:text-nest-mint"
              >
                <Icon icon={item.icon} className="text-[30px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

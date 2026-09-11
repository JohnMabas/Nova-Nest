"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/offline";
import appleIcon from "@iconify-icons/mdi/apple";
import googlePlayIcon from "@iconify-icons/logos/google-play-icon";

export default function MobileApplication() {
  return (
    <section
      id="mobile-app"
      className="relative overflow-hidden pt-20 md:pt-28 xl:pt-[210px]"
    >
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[340px] w-[340px] rounded-full border border-nest-tiffany/25" />
      <div className="pointer-events-none absolute -left-4 bottom-10 h-[240px] w-[240px] rounded-full border border-nest-tiffany/15" />

      <div className="container-content grid items-center gap-10 py-[50px] lg:grid-cols-[382px_minmax(0,1fr)] lg:gap-10">
        <div className="relative mx-auto aspect-[382/445] w-full max-w-[382px]">
          <Image
            src="/assets/phones.png"
            alt="NovaNest mobile application"
            fill
            className="object-contain"
            sizes="382px"
          />
        </div>

        <div className="flex max-w-[778px] flex-col gap-5">
          <h2 className="section-title">Mobile Application</h2>
          <p className="section-lead">
            Achieve seamless access to the world of real estate with the NovaNest
            Estates mobile app, available for download on both Google Play and
            the App Store. Whether you&apos;re searching for your dream home,
            exploring property listings, or staying updated with the latest market
            trends, our user-friendly app puts the power of real estate in the
            palm of your hand. Download now and experience the convenience of
            finding your perfect property anytime, anywhere.
          </p>
          <div className="flex flex-wrap gap-5 pt-5">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[56px] w-[195px] items-center justify-center gap-2.5 rounded-xl bg-gradient-to-b from-[#2F2F2F] to-black px-[42px] py-[15.5px] text-nest-mint transition hover:brightness-125"
            >
              <Icon icon={appleIcon} className="text-[25px]" />
              <span className="text-base font-semibold leading-[22px]">
                Download
              </span>
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[56px] w-[195px] items-center justify-center gap-2.5 rounded-xl bg-gradient-to-b from-[#2F2F2F] to-black px-[42px] py-[15.5px] text-nest-mint transition hover:brightness-125"
            >
              <Icon icon={googlePlayIcon} className="text-[25px]" />
              <span className="text-base font-semibold leading-[22px]">
                Download
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

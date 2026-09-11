"use client";

import Image from "next/image";
import { OutlineButton, PrimaryButton } from "@/components/ui";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-8 pt-10 md:pb-12 md:pt-16 xl:pb-0 xl:pt-[155px]"
    >
      <div className="pointer-events-none absolute -left-40 bottom-10 h-[420px] w-[420px] rounded-full border border-nest-tiffany/20" />
      <div className="pointer-events-none absolute -left-24 bottom-28 h-[300px] w-[300px] rounded-full border border-nest-tiffany/10" />

      <div className="container-content relative grid items-center gap-10 lg:grid-cols-[minmax(0,700px)_minmax(0,1fr)] lg:gap-10">
        <div className="flex max-w-[700px] flex-col items-start gap-5">
          <h1 className="text-[40px] font-semibold leading-[130%] text-nest-mint sm:text-[48px] md:text-[64px]">
            Discover your nest in the nova of luxury living.
          </h1>
          <p className="max-w-[700px] text-base leading-[160%] text-nest-tiffany md:text-lg">
            Our exquisite properties blend timeless elegance with modern
            comfort, offering an oasis of serenity amidst the bustling world
            outside. Come, embark on a journey of discovery, and let NovaNest
            Estates be the canvas upon which you paint the masterpiece of your
            life.
          </p>
          <div className="flex flex-wrap items-start gap-5 pt-1">
            <PrimaryButton>Explore Properties</PrimaryButton>
            <OutlineButton>Contact Us</OutlineButton>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px] lg:mx-0 lg:max-w-[460px] lg:justify-self-end">
          <Image
            src="/assets/hero-house.png"
            alt="Luxury NovaNest residence"
            fill
            priority
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 1024px) 90vw, 460px"
          />
        </div>
      </div>
    </section>
  );
}

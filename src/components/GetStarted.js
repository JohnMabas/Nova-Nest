"use client";

import Image from "next/image";
import { PrimaryButton } from "@/components/ui";

export default function GetStarted() {
  return (
    <section className="relative pt-20 md:pt-28 xl:pt-[200px]">
      <div className="container-content">
        <div className="relative isolate flex flex-col gap-10 overflow-visible rounded-xl bg-nest-mint p-8 md:flex-row md:items-stretch md:gap-10 md:p-10">
          <div className="flex max-w-[566px] flex-col items-start gap-5">
            <h2 className="text-[28px] font-semibold leading-[130%] text-nest-bg md:text-[32px]">
              Begin your property listing or purchasing journey with NovaNest.
            </h2>
            <p className="text-lg font-medium leading-[160%] text-nest-bg">
              Embark on your real estate journey by leveraging the expertise and
              resources of NovaNest. Whether you&apos;re listing your property for
              sale or searching for your dream home, our dedicated team is here
              to guide you every step of the way. With NovaNest, your real estate
              goals are within reach.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>

          <div className="relative mx-auto h-[280px] w-full max-w-[520px] lg:absolute lg:-top-[62.57px] lg:right-0 lg:mx-0 lg:h-[458px] lg:w-[632px] lg:max-w-none">
            <Image
              src="/assets/cta-house.png"
              alt="Modern A-frame home"
              fill
              className="object-cover object-bottom drop-shadow-2xl"
              sizes="632px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

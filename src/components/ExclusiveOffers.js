"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/offline";
import arrowExpandAll from "@iconify-icons/mdi/arrow-expand-all";
import bedKingOutline from "@iconify-icons/mdi/bed-king-outline";
import shower from "@iconify-icons/mdi/shower";
import { EXCLUSIVE_OFFERS } from "@/data/content";

const STACK = [
  { width: 63.7, height: 78.9, inset: 0, top: 20 },
  { width: 72.7, height: 90, inset: 9.6, top: 14.4 },
  { width: 80.7, height: 100, inset: 19.3, top: 9.4 },
];

function ImageStack({ images, reverse }) {
  return (
    <div
      className={`relative mx-auto h-[400px] w-full max-w-[519px] sm:h-[529px] ${
        reverse ? "lg:order-2" : ""
      }`}
    >
      {STACK.map((layer, i) => (
        <div
          key={images[i]}
          className="absolute overflow-hidden rounded-xl"
          style={{
            width: `${layer.width}%`,
            height: `${layer.height}%`,
            [reverse ? "right" : "left"]: `${layer.inset}%`,
            top: `${layer.top}%`,
            zIndex: i + 1,
            boxShadow: `0 ${reverse ? "" : "-"}4px 10px 5px rgba(33, 67, 61, 0.15)`,
          }}
        >
          <Image
            src={images[i]}
            alt={i === 2 ? "Featured property" : ""}
            fill
            className="object-cover"
            sizes="340px"
          />
        </div>
      ))}
    </div>
  );
}

function OfferDetails({ offer, reverse }) {
  return (
    <div
      className={`flex max-w-[601px] flex-col gap-5 ${
        reverse ? "lg:order-1" : ""
      }`}
    >
      <h3 className="text-4xl font-semibold leading-[130%] text-nest-mint md:text-[64px]">
        {offer.name}
      </h3>
      <div className="flex flex-col gap-2.5">
        <p className="text-[21px] font-medium leading-[130%] text-nest-tiffany line-through">
          {offer.originalPrice}
        </p>
        <p className="text-3xl font-semibold leading-[130%] text-nest-tiffany md:text-[32px]">
          {offer.price}
        </p>
      </div>
      <p className="text-2xl font-semibold leading-[130%] text-nest-tiffany">
        {offer.location}
      </p>
      <div className="mt-5 flex flex-col gap-5 text-nest-tiffany">
        {[
          { icon: arrowExpandAll, label: offer.size },
          { icon: bedKingOutline, label: offer.bedrooms },
          { icon: shower, label: offer.bathrooms },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <Icon icon={item.icon} className="text-[25px]" />
            <span className="text-lg leading-[160%]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExclusiveOffers() {
  return (
    <section
      id="exclusive-offers"
      className="relative overflow-hidden pt-20 md:pt-28 xl:pt-[200px]"
    >
      <div className="pointer-events-none absolute -bottom-10 -right-16 h-[420px] w-[420px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute bottom-8 right-10 h-40 w-40 rounded-full bg-nest-sun" />

      <div className="container-content flex flex-col items-center gap-10">
        <div className="flex max-w-[700px] flex-col items-center gap-2.5 text-center">
          <h2 className="section-title">Exclusive Offers</h2>
          <p className="section-lead">
            Explore our handpicked selection of discounted properties at NovaNest
            Estates. Don&apos;t miss out on these exclusive deals offering
            exceptional value for your dream home.
          </p>
        </div>

        <div className="flex w-full flex-col gap-16 md:gap-[100px]">
          {EXCLUSIVE_OFFERS.map((offer) => (
            <article
              key={offer.id}
              className="grid items-center gap-10 py-8 lg:grid-cols-2 lg:gap-20 lg:py-[50px]"
            >
              <ImageStack images={offer.images} reverse={offer.reverse} />
              <OfferDetails offer={offer} reverse={offer.reverse} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

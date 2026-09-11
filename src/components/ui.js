"use client";

import { Icon } from "@iconify/react/offline";
import arrowExpandAll from "@iconify-icons/mdi/arrow-expand-all";
import bedKingOutline from "@iconify-icons/mdi/bed-king-outline";
import shower from "@iconify-icons/mdi/shower";
import arrowLeft from "@iconify-icons/mdi/arrow-left";
import arrowRight from "@iconify-icons/mdi/arrow-right";

export function Logo({ className = "", dark = false }) {
  const ink = dark ? "text-nest-bg" : "text-nest-mint";
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className={`relative flex h-[50px] w-[50px] items-center justify-center ${ink}`}>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M15 36V18L22 14V36"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 36V22L29 18V36"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29 36V26L36 22V36"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 34C16 20 34 16 38 30"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M33 12L34.2 14.8L37 16L34.2 17.2L33 20L31.8 17.2L29 16L31.8 14.8L33 12Z"
            fill="currentColor"
          />
          <path
            d="M39 18L39.7 19.6L41.3 20.3L39.7 21L39 22.6L38.3 21L36.7 20.3L38.3 19.6L39 18Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className={`text-[26px] font-semibold leading-9 ${ink}`}>
        NovaNest
      </span>
    </a>
  );
}

export function PrimaryButton({
  children,
  className = "",
  size = "md",
  type = "button",
  ...props
}) {
  const base = size === "sm" ? "btn-primary-sm" : "btn-primary";
  return (
    <button type={type} className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function OutlineButton({
  children,
  className = "",
  size = "md",
  type = "button",
  ...props
}) {
  const base = size === "sm" ? "btn-outline-sm" : "btn-outline";
  return (
    <button type={type} className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ArrowButton({ direction = "right", muted = false, ...props }) {
  return (
    <button
      type="button"
      className={muted ? "btn-arrow-muted" : "btn-arrow"}
      aria-label={direction === "left" ? "Previous" : "Next"}
      {...props}
    >
      <Icon
        icon={direction === "left" ? arrowLeft : arrowRight}
        className="text-xl"
      />
    </button>
  );
}

export function SpecRow({ size, bedrooms, bathrooms, dark = false }) {
  const color = dark ? "text-nest-feld" : "text-nest-tiffany";
  const items = [
    { icon: arrowExpandAll, label: size },
    { icon: bedKingOutline, label: bedrooms },
    { icon: shower, label: bathrooms },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-5 ${color}`}>
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2.5">
          <Icon icon={item.icon} className="text-[25px]" />
          <span className="text-lg leading-[160%]">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function SpecRowCompact({ size, bedrooms, bathrooms }) {
  const items = [
    { icon: arrowExpandAll, label: size },
    { icon: bedKingOutline, label: bedrooms },
    { icon: shower, label: bathrooms },
  ];

  return (
    <div className="flex flex-wrap items-center gap-5 text-sm leading-[160%] text-nest-feld">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2.5">
          <Icon icon={item.icon} className="text-[20px]" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-[227px] -top-[422px] h-[844px] w-[844px] rounded-full bg-nest-deep blur-[200px]" />
      <div className="absolute left-[1198px] top-0 h-[844px] w-[844px] rounded-full bg-nest-moss blur-[200px]" />
      <div className="absolute -left-[429px] top-[2041px] h-[844px] w-[844px] rounded-full bg-nest-deep blur-[200px]" />
      <div className="absolute -left-[459px] top-[4526px] h-[844px] w-[844px] rounded-full bg-nest-moss blur-[200px]" />
      <div className="noise-overlay absolute inset-0 opacity-40 mix-blend-overlay" />
    </div>
  );
}

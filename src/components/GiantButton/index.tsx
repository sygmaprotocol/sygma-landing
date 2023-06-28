import React from "react";

type Props = {
  type: "primary" | "secondary" | "outline";
  children: any;
  href?: string;
  className?: string;
};

export default function GiantButton({
  type,
  children,
  href,
  className,
}: Props) {
  let styles;
  if (type === "primary") {
    styles = `flex w-full transition-all rounded-2xl bg-gray-100 brightness-[90%] px-5 py-8 text-lg font-medium text-black shadow-sm hover:brightness-[80%] cursor-pointer`;
  } else if (type === "secondary") {
    styles = `flex w-full transition-all rounded-2xl bg-gray-800 brightness-[90%] px-5 py-8 text-lg font-medium text-white shadow-sm hover:brightness-[80%] cursor-pointer`;
  } else {
    styles = `transition-all text-md font-medium leading-6 hover:text-primary-100 `;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} ${styles}`}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="absolute right-4 ml-16 h-5 w-5 transition-all hover:rotate-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </a>
  );
}

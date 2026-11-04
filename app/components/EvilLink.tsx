import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export default function EvilLink({
  children,
  className,
  arrow = true,
  ...props
}: LinkProps & { children: ReactNode; className?: string; arrow?: boolean }) {
  return (
    <Link
      className={cn(
        "group/minimal inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] px-5 text-sm font-medium text-neutral-50 outline-none select-none",
        "bg-linear-to-b from-[#353535] to-[#272727] shadow-[0_0_0_1px_rgb(0_0_0/0.9),inset_0_0_0_1px_rgb(255_255_255/0.06),inset_0_1px_0_rgb(255_255_255/0.14),0_1px_2px_rgb(0_0_0/0.25),0_4px_12px_-4px_rgb(0_0_0/0.4)]",
        "transition-[scale,filter,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.35,0.64,1)] hover:brightness-110 active:scale-[0.97] active:brightness-95 active:duration-100 motion-reduce:active:scale-100",
        "focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {arrow ? (
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-neutral-50/45 transition-[translate,color] duration-150 group-hover/minimal:translate-x-0.5 group-hover/minimal:text-neutral-50/75">
          <path d="M5 3h8v8M13 3 3 13" />
        </svg>
      ) : null}
    </Link>
  );
}

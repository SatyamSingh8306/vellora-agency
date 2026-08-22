"use client";

import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { BOOKING_URL, CAL_LINK, CAL_NAMESPACE } from "../lib/constants";

type BookMeetingProps = {
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "type">;

export default function BookMeeting({
  children,
  className,
  onClick,
  ...props
}: BookMeetingProps) {
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    onClick?.(e);
    if (e.defaultPrevented) return;
    // If the Cal embed is unavailable (blocked by an ad blocker or slow to
    // load), fall back to opening the booking page in a new tab.
    if (!window.__velloraCalReady) {
      setTimeout(() => {
        if (!window.__velloraCalReady) {
          window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
        }
      }, 800);
    }
  }

  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

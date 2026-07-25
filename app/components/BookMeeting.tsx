"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { CAL_LINK, CAL_NAMESPACE } from "../lib/constants";

type BookMeetingProps = {
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "type">;

export default function BookMeeting({
  children,
  className,
  ...props
}: BookMeetingProps) {
  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

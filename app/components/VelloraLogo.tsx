type VelloraLogoProps = {
  /** light = white mark (dark backgrounds), dark = black mark (light backgrounds) */
  tone?: "light" | "dark";
  className?: string;
  nameClassName?: string;
  markSize?: "sm" | "md";
};

export default function VelloraLogo({
  tone = "light",
  className = "",
  nameClassName = "",
  markSize = "md",
}: VelloraLogoProps) {
  const light = tone === "light";
  const mark =
    markSize === "sm"
      ? "h-7 w-7 text-[14px] rounded-[7px]"
      : "h-8 w-8 text-base rounded-lg";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`inline-flex shrink-0 items-center justify-center border-[1.5px] font-bold tracking-[-0.02em] ${mark} ${
          light
            ? "border-white/85 bg-white/15 text-white"
            : "border-neutral-900 bg-neutral-900 text-white"
        }`}
        style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
      >
        V
      </span>
      <span
        className={`font-bold tracking-[-0.02em] ${
          light ? "text-white" : "text-neutral-950"
        } ${nameClassName || (markSize === "sm" ? "text-[17px]" : "text-[22px]")}`}
        style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
      >
        Vellora
      </span>
    </span>
  );
}

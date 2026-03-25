import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  /** Shown after the label (e.g. enter-key glyph). */
  icon?: ReactNode;
};

export function Button({
  children,
  icon,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-w-[200px] items-center justify-center gap-3 rounded-md bg-[linear-gradient(180deg,#36393E_0%,#000000_100%)] px-8 py-3.5 text-[14px] font-medium tracking-tight text-[#d4d4d4] shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] transition-[transform,filter,box-shadow] duration-200 ease-out hover:brightness-110 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 disabled:pointer-events-none disabled:opacity-40 ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {icon ?? null}
    </button>
  );
}

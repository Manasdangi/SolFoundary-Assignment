import type { IconComponent } from "../icons/iconSprite";
import type { ReactNode } from "react";

type BadgeProps = {
  icon?: IconComponent;
  children: ReactNode;
  className?: string;
};

export function Badge({ icon: Icon, children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-800 ${className}`}
    >
      {Icon ? (
        <Icon
          className="h-3.5 w-3.5 shrink-0 text-neutral-500"
          aria-hidden
        />
      ) : null}
      {children}
    </span>
  );
}

import type { ReactNode } from "react";
import { restaurant } from "@/data/restaurant";
import { Button } from "@/components/ui/Button";

type CallButtonProps = {
  variant?: "primary" | "outline" | "ghost" | "text";
  label?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export function CallButton({
  variant = "outline",
  label = "Appeler pour réserver",
  className,
  children,
}: CallButtonProps) {
  return (
    <Button href={restaurant.phoneHref} variant={variant} className={className}>
      {children ?? label}
    </Button>
  );
}

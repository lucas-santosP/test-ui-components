import { cn } from "tailwind-variants";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { buttonStyles } from "./styles";
import type { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  const { children, className, variant, color, size, rounded, leftIcon, rightIcon, ...rest } = props;

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonStyles({ variant, color, size, rounded }), className)}
      {...rest}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </ButtonPrimitive>
  );
}

export { Button, buttonStyles };
export type { ButtonProps };

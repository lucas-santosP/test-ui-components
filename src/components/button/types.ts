import type { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { ButtonStylesProps } from "./styles";

export interface ButtonProps extends ButtonPrimitive.Props, ButtonStylesProps {
  /**
   * Left icon element.
   */
  leftIcon?: React.ReactNode;

  /**
   * Right icon element.
   */
  rightIcon?: React.ReactNode;
}

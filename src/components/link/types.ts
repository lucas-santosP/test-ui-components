import React from "react";
import type { LinkStylesProps } from "./styles";

/**
 * Link component props.
 *
 * @property {string} [className] - Additional CSS classes.
 * @property {React.ReactNode} [children] - Text node children.
 * @property {string} href - Link href attribute.
 * @property {ReactNode} [leftIcon] - Left icon element.
 * @property {ReactNode} [rightIcon] - Right icon element.
 */
export interface LinkProps extends Omit<React.ComponentProps<"a">, "color">, LinkStylesProps {
  /**
   * Additional CSS classes.
   */
  className?: string;
  /**
   * Text node children.
   */
  children?: React.ReactNode;
  /**
   * Link href attribute.
   */
  href: string;
  /**
   * Left icon element.
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon element.
   */
  rightIcon?: React.ReactNode;
  /**
   * Disabled state.
   */
  disabled?: boolean;
}

import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "tailwind-variants";
import { inputStyles } from "./styles";
import { Icons } from "@/libs/icons";
import type { InputProps } from "./types";

function Input(props: InputProps) {
  const { className, type = "text", leftIcon, rightIcon, ...restProps } = props;
  const styles = inputStyles({
    leftIcon: Boolean(leftIcon),
    rightIcon: Boolean(rightIcon),
  });

  return (
    <div className={styles.wrapper()}>
      {leftIcon && (
        <span className={styles.leftIcon()} aria-disabled={restProps.disabled} aria-readonly={restProps.readOnly}>
          {leftIcon}
        </span>
      )}
      {rightIcon && (
        <span className={styles.rightIcon()} aria-disabled={restProps.disabled} aria-readonly={restProps.readOnly}>
          {rightIcon}
        </span>
      )}
      {restProps["aria-invalid"] && (
        <span className={styles.errorIcon()}>
          <Icons.AlertTriangle />
        </span>
      )}

      <InputPrimitive {...restProps} type={type} className={cn(styles.input(), className)} />
    </div>
  );
}

export { Input };
export type { InputProps };

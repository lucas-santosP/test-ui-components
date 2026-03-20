import * as React from "react";
import { cn } from "tailwind-variants";
import { labelStyles } from "./styles";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(labelStyles(), className)}
      {...props}
    />
  );
}

export { Label };

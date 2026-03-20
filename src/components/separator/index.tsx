import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { cn } from "tailwind-variants";
import { separatorStyles } from "./styles";

function Separator({ className, orientation = "horizontal", ...props }: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(separatorStyles(), className as string | undefined)}
      {...props}
    />
  );
}

export { Separator };

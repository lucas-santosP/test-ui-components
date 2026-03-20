import { tv, type VariantProps } from "tailwind-variants";

export const avatarStyles = tv({
  slots: {
    root: [
      "group/avatar relative flex shrink-0 rounded-full select-none",
      "after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken",
      "dark:after:mix-blend-lighten",
    ],
    image: "aspect-square size-full rounded-full object-cover",
    fallback: "bg-muted text-muted-foreground flex size-full items-center justify-center rounded-full",
  },
  variants: {
    size: {
      sm: {
        root: "size-6",
        fallback: "text-xs",
      },
      md: {
        root: "size-8",
        fallback: "text-sm",
      },
      lg: {
        root: "size-10",
        fallback: "text-sm",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type AvatarStylesProps = VariantProps<typeof avatarStyles>;

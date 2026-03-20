import { tv, type VariantProps } from "tailwind-variants";

export const fieldStyles = tv({
  slots: {
    root: "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
    set: "flex flex-col gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
    legend: "mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base",
    group:
      "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
    content: "group/field-content flex flex-1 flex-col gap-1 leading-snug",
    label: [
      "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
      "has-data-checked:border-primary/30 has-data-checked:bg-primary/5",
      "has-[>[data-slot=field]]:rounded-xl has-[>[data-slot=field]]:border has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
      "*:data-[slot=field]:p-4",
      "dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10",
    ],
    title: "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
    description: [
      "text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5",
      "last:mt-0 nth-last-2:-mt-1",
      "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
    ],
    separator: "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
    separatorLine: "absolute inset-0 top-1/2",
    separatorContent: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
    error: "text-sm font-normal text-destructive",
    errorList: "ml-4 flex list-disc flex-col gap-1",
  },
  variants: {
    orientation: {
      vertical: {
        root: "flex-col *:w-full [&>.sr-only]:w-auto",
      },
      horizontal: {
        root: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      },
      responsive: {
        root: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      },
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export type FieldStylesProps = VariantProps<typeof fieldStyles>;

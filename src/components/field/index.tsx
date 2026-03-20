import { useMemo } from "react";

import { cn } from "tailwind-variants";
import { Label } from "../label";
import { Separator } from "../separator";
import { fieldStyles } from "./styles";
import type {
  FieldSetProps,
  FieldLegendProps,
  FieldGroupProps,
  FieldProps,
  FieldContentProps,
  FieldLabelProps,
  FieldTitleProps,
  FieldDescriptionProps,
  FieldSeparatorProps,
  FieldErrorProps,
} from "./types";

function FieldSet(props: FieldSetProps) {
  const { className, ...rest } = props;
  const styles = fieldStyles();

  return <fieldset data-slot="field-set" className={cn(styles.set(), className)} {...rest} />;
}

function FieldLegend(props: FieldLegendProps) {
  const { className, variant = "legend", ...rest } = props;
  const styles = fieldStyles();

  return (
    <legend data-slot="field-legend" data-variant={variant} className={cn(styles.legend(), className)} {...rest} />
  );
}

function FieldGroup(props: FieldGroupProps) {
  const { className, ...rest } = props;
  const styles = fieldStyles();

  return <div data-slot="field-group" className={cn(styles.group(), className)} {...rest} />;
}

function Field(props: FieldProps) {
  const { className, orientation = "vertical", ...rest } = props;
  const styles = fieldStyles({ orientation });

  return (
    <div role="group" data-slot="field" data-orientation={orientation} className={cn(styles.root(), className)} {...rest} />
  );
}

function FieldContent(props: FieldContentProps) {
  const { className, ...rest } = props;
  const styles = fieldStyles();

  return <div data-slot="field-content" className={cn(styles.content(), className)} {...rest} />;
}

function FieldLabel(props: FieldLabelProps) {
  const { className, ...rest } = props;
  const styles = fieldStyles();

  return <Label data-slot="field-label" className={cn(styles.label(), className)} {...rest} />;
}

function FieldTitle(props: FieldTitleProps) {
  const { className, ...rest } = props;
  const styles = fieldStyles();

  return <div data-slot="field-label" className={cn(styles.title(), className)} {...rest} />;
}

function FieldDescription(props: FieldDescriptionProps) {
  const { className, ...rest } = props;
  const styles = fieldStyles();

  return <p data-slot="field-description" className={cn(styles.description(), className)} {...rest} />;
}

function FieldSeparator(props: FieldSeparatorProps) {
  const { children, className, ...rest } = props;
  const styles = fieldStyles();

  return (
    <div data-slot="field-separator" data-content={!!children} className={cn(styles.separator(), className)} {...rest}>
      <Separator className={styles.separatorLine()} />
      {children && (
        <span className={styles.separatorContent()} data-slot="field-separator-content">
          {children}
        </span>
      )}
    </div>
  );
}

function FieldError(props: FieldErrorProps) {
  const { className, children, errors, ...rest } = props;
  const styles = fieldStyles();

  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className={styles.errorList()}>
        {uniqueErrors.map((error, index) => error?.message && <li key={index}>{error.message}</li>)}
      </ul>
    );
  }, [children, errors, styles]);

  if (!content) {
    return null;
  }

  return (
    <div role="alert" data-slot="field-error" className={cn(styles.error(), className)} {...rest}>
      {content}
    </div>
  );
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
};

export type {
  FieldSetProps,
  FieldLegendProps,
  FieldGroupProps,
  FieldProps,
  FieldContentProps,
  FieldLabelProps,
  FieldTitleProps,
  FieldDescriptionProps,
  FieldSeparatorProps,
  FieldErrorProps,
};

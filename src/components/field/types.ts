import * as React from "react";
import type { Label } from "../label";
import type { FieldStylesProps } from "./styles";

export type FieldSetProps = React.ComponentProps<"fieldset">;

export interface FieldLegendProps extends React.ComponentProps<"legend"> {
  variant?: "legend" | "label";
}

export type FieldGroupProps = React.ComponentProps<"div">;

export type FieldProps = React.ComponentProps<"div"> & FieldStylesProps;

export type FieldContentProps = React.ComponentProps<"div">;

export type FieldLabelProps = React.ComponentProps<typeof Label>;

export type FieldTitleProps = React.ComponentProps<"div">;

export type FieldDescriptionProps = React.ComponentProps<"p">;

export interface FieldSeparatorProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

export interface FieldErrorProps extends React.ComponentProps<"div"> {
  errors?: Array<{ message?: string } | undefined>;
}

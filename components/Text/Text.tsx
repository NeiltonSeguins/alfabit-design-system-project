import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva(["text-gray-primary", "text-sm", "font-normal"], {
  variants: {
    intent: {
      primary: ["text-gray-primary"],
      secondary: ["text-gray-secondary"],
      tertiary: ["text-gray-tertiary"],
    },
    size: {
      xs: ["text-xs"],
      sm: ["text-sm"],
      md: ["text-md"],
      lg: ["text-lg"],
      xl: ["text-xl"],
      title1: ["text-txl"],
      title2: ["text-tlg"],
      title3: ["text-tmd"],
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  },
});

export type TextProps = VariantProps<typeof textVariants> & {
  children: React.ReactNode;
  element?: "h1" | "h2" | "h3" | "p";
} & React.HTMLAttributes<HTMLElement>;

const Text = ({ children, element = "p", className, ...rest }: TextProps) => {
  const Element = element;
  return (
    <Element className={`${textVariants(rest)} ${className}`} {...rest}>
      {children}
    </Element>
  );
};

export default Text;

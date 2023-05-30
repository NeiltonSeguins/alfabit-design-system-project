import React from "react";

export type BoxProps = {
  rounded?: boolean;
  border?: boolean;
  filledBackground?: boolean;
  type?: "default" | "alert" | "success" | "error";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Box = ({
  rounded = false,
  border = false,
  filledBackground = false,
  type = "default",
  children,
  className,
  ...rest
}: BoxProps) => {
  let classNames = "";

  if (rounded) {
    classNames += " rounded-md";
  }

  if (border) {
    classNames += " border border-gray-300";
  }

  if (filledBackground) {
    classNames += " bg-gray-100";
  }

  if (type === "alert") {
    classNames += " bg-yellow-100 text-yellow-900";
  } else if (type === "success") {
    classNames += " bg-green-100 text-green-900";
  } else if (type === "error") {
    classNames += " bg-red-100 text-red-900";
  }

  return (
    <div className={`${classNames} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Box;

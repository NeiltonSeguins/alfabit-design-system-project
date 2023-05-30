import React from "react";

export type DividerProps = {
  width?: string;
  height?: string;
  bgColor?: "light" | "dark";
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Divider = ({
  children,
  width,
  height,
  bgColor,
  ...rest
}: DividerProps) => {
  return (
    <div
      className={`${width ? width : ""} flex items-center justify-center`}
      {...rest}
    >
      <div
        className={`${children ? "w-1/3" : "w-1/2"} ${
          height ? height : "h-[1px]"
        } ${
          bgColor === "dark"
            ? "bg-dark"
            : bgColor === "light"
            ? "bg-light"
            : "bg-black"
        }`}
      ></div>
      {children && <div className="px-3">{children}</div>}
      <div
        className={`${children ? "w-1/3" : "w-1/2"} ${
          height ? height : "h-[1px]"
        } ${
          bgColor === "dark"
            ? "bg-dark"
            : bgColor === "light"
            ? "bg-light"
            : "bg-black"
        }`}
      ></div>
    </div>
  );
};

export default Divider;

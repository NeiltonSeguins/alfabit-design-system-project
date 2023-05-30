import { UserIcon } from "@heroicons/react/24/outline";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
} & React.HTMLAttributes<HTMLDivElement>;

function getSizeAavatar(size: AvatarProps["size"]) {
  switch (size) {
    case "xs":
      return "w-5 h-5";
    case "sm":
      return "w-6 h-6";
    case "md":
      return "w-8 h-8";
    case "lg":
      return "w-9 h-9";
    default:
      return "w-5 h-5";
  }
}

const Avatar = ({ size = "xs", className, ...rest }: AvatarProps) => {
  return (
    <div
      className={`relative rounded-full ${getSizeAavatar(
        size
      )} ${className} bg-slate-100 flex items-center justify-center text-slate-400`}
      {...rest}
    >
      <UserIcon className={`absolute w-1/2 h-1/2`} />
    </div>
  );
};

export default Avatar;

import { XMarkIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import Box from "../Box/Box";
import Text from "../Text/Text";

export type NoticeProps = {
  type: "alert" | "success" | "error";
  children?: React.ReactNode;
  message: string;
} & React.HTMLAttributes<HTMLDivElement>;

const getTypeNotice = (type: NoticeProps["type"]) => {
  switch (type) {
    case "success":
      return "text-green-900";
    case "alert":
      return "text-yellow-900";
    case "error":
      return "text-red-900";
    default:
      return "bg-slate-100";
  }
};

const Notice = ({
  children,
  type,
  message,
  className,
  ...rest
}: NoticeProps) => {
  return (
    <Box
      className={`flex p-4 justify-between items-center ${getTypeNotice(
        type
      )} ${className}`}
      filledBackground
      rounded
      type={type}
      {...rest}
    >
      <div className="flex gap-2">
        <InformationCircleIcon className="w-4 h-4" />
        <Text className={`${getTypeNotice(type)} ${className}`}>{message}</Text>
      </div>
      {children}
      <XMarkIcon className="w-4 h-4 cursor-pointer" />
    </Box>
  );
};

export default Notice;

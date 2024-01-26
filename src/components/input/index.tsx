import classNames from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useTheme } from "../../context";

type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "file"
  | "textarea"
  | "search";
type InputSize = "small" | "medium" | "large";

export type InputPropsType = {
  id?: string;
  name?: string;
  label?: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
  value?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
>;

const sizeMap: { [key in InputSize]: string } = {
  small: "py-4 text-base",
  medium: "py-6 text-base",
  large: "py-8 text-base",
};

export const Input = ({
  id,
  name,
  label,
  type = "text",
  size = "small",
  className,
  placeholder,
  value,
  ...props
}: InputPropsType) => {
  const [textType, setType] = useState(type);
  const { isDarkMode } = useTheme();
  const textStyles = `text-gray-400 absolute top-6 right-7`;

  return (
    <div className="flex relative">
      {type === "search" && (
        <div className="absolute top-5 left-4">
          <BiSearch size={20} />
        </div>
      )}

      <input
        type={textType}
        id={id}
        name={name}
        value={value}
        aria-label={label}
        placeholder={placeholder}
        autoComplete="off"
        className={classNames(
          `w-full !font-clash block px-5 outline-none transition-colors ease-in-out focus:border-blue-200 ${
            isDarkMode ? "bg-primaryBlack border-green-500" : "border-gray-300"
          } rounded-full font-medium text-primaryColor placeholder:font-medium placeholder:text-sm border-[1px]`,
          sizeMap[size],
          className
        )}
        {...props}
      />

      {type === "password" &&
        (textType === "password" ? (
          <AiOutlineEyeInvisible
            size="20"
            className={classNames(textStyles)}
            onClick={() => setType("text")}
          />
        ) : (
          <AiOutlineEye
            size="20"
            className={classNames(textStyles)}
            onClick={() => setType("password")}
          />
        ))}
    </div>
  );
};

export default Input;

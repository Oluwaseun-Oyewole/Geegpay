import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { FiLoader } from "react-icons/fi";

type IProps = {
  className?: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IProps & PropsWithChildren> = ({
  className,
  children,
  isLoading,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`flex items-center justify-center gap-3 font-medium font-clash outline-0 hover:transition-all hover:duration-700 hover:ease-in-out w-full py-3 ${className}`}
    >
      {children}
      {isLoading && (
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          <FiLoader size={25} />
        </svg>
      )}
    </button>
  );
};

export default Button;

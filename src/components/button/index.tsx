import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

type IProps = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IProps & PropsWithChildren> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`flex items-center justify-center gap-3 font-medium font-clash outline-0 hover:transition-all hover:duration-700 hover:ease-in-out w-full py-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

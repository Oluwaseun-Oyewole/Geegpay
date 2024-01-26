import classNames from "classnames";
import { useTheme } from "../../context";

interface LabelType {
  id?: string;
  label?: string;
  className?: string;
}

export const Label = ({ id, label, className }: LabelType) => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <label
        htmlFor={id}
        className={classNames(
          `block my-2 md:text-base !text-sm  ${
            isDarkMode ? "text-primary" : "text-black"
          } font-semibold`,
          className
        )}
      >
        {label}
      </label>
    </>
  );
};

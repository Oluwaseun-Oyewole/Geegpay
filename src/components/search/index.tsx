import { Formik } from "formik";
import React, { ChangeEvent, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchImage from "../../assets/svg/search.svg";
import { useTheme } from "../../context";

interface ISearchProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
  iconColor?: string;
}

const Search: React.FC<ISearchProps> = (props) => {
  const { onSearch, placeholder = "Search..." } = props;
  const [searchInput, setSearchInput] = useState("");
  const { isDarkMode } = useTheme();

  const handleSubmit = (data: Record<string, string>) => {
    const value = data.search;
    setSearchInput(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  const initialValues = {
    search: searchInput,
  };
  return (
    <div className="relative">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => (
          <>
            <form className="w-full relative">
              <input
                type="search"
                placeholder={placeholder}
                name="search"
                value={formik.values.search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  formik.handleChange(e);
                }}
                className={`search-input relative px-8 !rounded-full !py-[12px] placeholder:text-xs ${
                  isDarkMode
                    ? "bg-[rgba(52,202,165,0.4)] text-gray200 !border-black placeholder:text-gray200 "
                    : "bg-white text-gray400 !border-gray200"
                } text-sm !focus:bg-transparent  border-[1.5px]  outline-none w-[350px] font-medium placeholder:font-medium`}
              />
              {isDarkMode ? (
                <IoSearchOutline className="absolute top-[19.5px] left-2 text-sm w-7 text-gray200" />
              ) : (
                <img
                  src={SearchImage}
                  alt="search"
                  className="absolute top-[16.5px] text-[#6F6F76] left-3 text-sm w-4"
                />
              )}
            </form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Search;

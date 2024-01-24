import { Formik } from "formik";
import React, { ChangeEvent, useState } from "react";
import SearchImage from "../../assets/svg/search.svg";

interface ISearchProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
  iconColor?: string;
}

const Search: React.FC<ISearchProps> = (props) => {
  const { onSearch, placeholder = "Search..." } = props;
  const [searchInput, setSearchInput] = useState("");

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
                className="relative px-8 !rounded-full !py-[12px] placeholder:text-xs bg-white text-sm !focus:bg-transparent text-gray400  border-[1.5px] !border-gray200 outline-none w-[350px] font-medium placeholder:font-medium"
              />
              <img
                src={SearchImage}
                alt="search"
                className="absolute top-[16.5px] text-[#6F6F76] left-3 text-sm w-4"
              />
            </form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Search;

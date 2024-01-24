import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import Profile from "../../assets/svg/Profile.svg";
import Calender from "../../assets/svg/calender.svg";
import Dropdown from "../../assets/svg/dropdown.svg";
import Notification from "../../assets/svg/notification.svg";
import { PageTitle } from "../../helper/keyConstants";
import Search from "../search";
import Typography from "../typography";

const Navbar = () => {
  const [currentDate, ,] = useState<Date>(new Date());
  const [currentYear, setCurrentYear] = useState<number>(0);
  const [currentMonth, setCurrentMonth] = useState<number | string>(0);
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [clicked, setClicked] = useState(false);

  const openMobileMenu = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const updateDate = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const day = currentDate.getDate();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ];
      setCurrentYear(year);
      setCurrentMonth(months[month]);
      setCurrentDay(day);
    };
    updateDate();
    const intervalId = setInterval(updateDate, 1000);
    return () => clearInterval(intervalId);
  }, [currentDate]);

  const location = useLocation();
  const match = location.pathname.match(/\/app\/([^/]+)/);

  const getTitleEnum = match
    ? match[1]
    : location.pathname.split("/").pop() || "";

  const variant = {
    hidden: { opacity: 0, x: 500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.621,
      },
    },
    exit: {
      //   opacity: 0,
      x: 500,
      transition: {
        duration: 0.621,
      },
    },
  };

  const onSearch = () => {
    console.log("searching for something..");
  };

  return (
    <header className="">
      <nav className="grid grid-flow-col items-center lg:grid-cols-[60%_auto] px-4 lg:px-6 py-5 border-b border-gray200 gap-10">
        <div className=" hidden lg:grid grid-flow-col items-center justify-between">
          <Typography type="h1" className="" variant="textXl" weight="medium">
            {PageTitle[getTitleEnum as keyof typeof PageTitle]}
          </Typography>
          <Search />
        </div>

        <div className="hidden lg:grid grid-flow-col grid-cols-[50%_45%] gap-6 items-center justify-between">
          <div className="flex justify-between w-full">
            <div className="flex gap-2 items-center">
              <img src={Calender} alt="calender" />{" "}
              <Typography type="p">{` ${currentMonth} ${currentDay},  ${currentYear}`}</Typography>
            </div>
            <img
              src={Notification}
              alt="notification"
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between gap-2 border-[1.5px] border-gray200 rounded-full py-1 px-2">
            <img src={Profile} alt="profile" />
            <div>
              <Typography
                type="p"
                children="Justin Bergson"
                className="text-center"
              />
              <Typography
                type="p"
                children="Justin@gmail.com"
                className="text-gray400"
              />
            </div>
            <img src={Dropdown} alt="dropdown " />
          </div>
        </div>
        <div className="lg:hidden grid items-end justify-end pt-4">
          {!clicked ? (
            <div onClick={openMobileMenu}>
              <RxHamburgerMenu size={25} />
            </div>
          ) : (
            <div onClick={openMobileMenu}>
              <IoMdClose size={25} />
            </div>
          )}
        </div>

        <AnimatePresence>
          {clicked && (
            <motion.div
              className="w-full lg:hidden fixed -right-0  h-screen top-[82px] bg-white overflow-hidden"
              variants={variant}
              animate="visible"
              initial="hidden"
              exit="exit"
            >
              <div className="max-w-[90%] lg:max-w-[95%] mx-auto pt-3">
                <Typography
                  type="h1"
                  className=""
                  variant="textXl"
                  weight="medium"
                >
                  {PageTitle[getTitleEnum as keyof typeof PageTitle]}
                </Typography>
                <div className="w-[80%]">
                  <Search onSearch={onSearch} className="w-[80%]" />
                </div>

                <div className="lg:hidden grid grid-flow-row grid-rows-[max-content_max-content] gap-10">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-2 items-center">
                      <img src={Calender} alt="calender" />{" "}
                      <Typography type="p">{` ${currentMonth} ${currentDay},  ${currentYear}`}</Typography>
                    </div>
                    <img
                      src={Notification}
                      alt="notification"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 border-[1.5px] border-gray200 rounded-full py-1 px-2">
                    <img src={Profile} alt="profile" />
                    <div>
                      <Typography
                        type="p"
                        children="Justin Bergson"
                        className="text-center"
                      />
                      <Typography
                        type="p"
                        children="Justin@gmail.com"
                        className="text-gray400"
                      />
                    </div>
                    <img src={Dropdown} alt="dropdown " />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;

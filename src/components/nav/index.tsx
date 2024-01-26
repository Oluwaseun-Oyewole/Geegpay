import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import Profile from "../../assets/svg/Profile.svg";
import Calender from "../../assets/svg/calender.svg";
import Dropdown from "../../assets/svg/dropdown.svg";
import Logo from "../../assets/svg/logo.svg";
import Notification from "../../assets/svg/notification.svg";
import { PageTitle } from "../../helper/keyConstants";
import Search from "../search";
import Typography from "../typography";
import { Menu } from "./mobile";

type IFrom = "last" | "first" | "center";
const staggerLinks = (delayTime?: number, state?: IFrom) =>
  stagger(delayTime ? delayTime : 0.1, { startDelay: 0.15, from: state });

const useAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "nav",
      isOpen
        ? { opacity: 1, display: "block" }
        : { opacity: 0, display: "none" },
      {
        ease: [0.08, 0.65, 0.53, 0.96],
        duration: 0.3,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, filter: "blur(0px)" }
        : { opacity: 0, filter: "blur(10px)" },
      { delay: isOpen ? staggerLinks(0.08) : staggerLinks(0.05, "last") }
    );
  }, [isOpen]);

  return scope;
};

type INavProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Navbar: React.FC<INavProps> = ({ isOpen, toggle }) => {
  const scope = useAnimation(isOpen);

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

  return (
    <header>
      <nav
        ref={scope}
        className="grid lg:grid-flow-col items-center lg:grid-cols-[60%_auto] px-3 lg:px-6 lg:py-5 border-b border-gray200 lg:gap-10"
      >
        <div className=" hidden lg:grid grid-flow-col items-center justify-between">
          <Typography type="h1" className="" variant="textXl" weight="medium">
            {PageTitle[getTitleEnum as keyof typeof PageTitle]}
          </Typography>
          <Search />
        </div>

        <div className="hidden lg:grid grid-flow-col grid-cols-1  xl:grid-cols-[50%_45%] gap-6 items-center justify-between">
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
          <div className="hidden xl:flex items-center justify-between gap-2 border-[1.5px] border-gray200 rounded-full py-1 px-2 ">
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

        <div className="lg:hidden w-full grid grid-flow-col items-center justify-between py-5">
          <img src={Logo} alt="logo" />
          <div className="hidden md:block lg:hidden">
            <Search />
          </div>
          <div className="justify-between hidden md:flex lg:hidden">
            <div className="flex gap-2 items-center">
              <img src={Calender} alt="calender" />{" "}
              <Typography type="p">{` ${currentMonth} ${currentDay},  ${currentYear}`}</Typography>
            </div>
          </div>
          <div className="flex items-center gap-2" onClick={() => toggle()}>
            {!isOpen ? (
              <div onClick={openMobileMenu}>
                <RxHamburgerMenu size={25} />
              </div>
            ) : (
              <div onClick={openMobileMenu}>
                <IoMdClose size={25} />
              </div>
            )}
          </div>
        </div>

        <Menu />
      </nav>
    </header>
  );
};

export default Navbar;

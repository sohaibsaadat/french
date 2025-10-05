import React, { useState, useRef,useEffect } from "react";
import { home_collection1, logo_black } from "../assets/assets.js";
import { Hamburger, HamburgerIcon, Menu, Search, ShoppingCart, User2Icon } from "lucide-react";

const Navbar = () => {
  const [hover, setHover] = useState(null);
  const timeoutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 766) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menu = [
    {
      name: "men",
      title: ["Formal", "Casual", "Sandals", "Sneaker", "Slipper"],
      src: home_collection1,
    },
    {
      name: "women",
      title: ["Formal", "Casual", "Sandals", "Sneaker", "Slipper"],
    },
    {
      name: "accessories",
      title: ["Sox", "Belts", "Watch", "Bands"],
    },
    {
      name: "sale",
      title: ["14 Aug", "Eid Ul Azha", "Eid-ul-Fitr"],
    },
  ];

  const handleMouseEnter = (category) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHover(category);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHover(null);
    }, .5); // delay (200ms)
  };

return (
  <>
    {isMobile ? (
      <div className="p-5 flex justify-between items-center bg-gray-100">
  <div>
    <Menu />
  </div>

  <div className="flex justify-center items-center">
    <img 
      src={logo_black} 
      alt="logo"
      className="max-w-[150px] h-auto md:max-w-[200px] lg:max-w-[250px]" 
    />
  </div>

  <div className="flex flex-row  items-center ">
<ul className="flex flex-row xs:flex-col gap-2 absolute right-6 text-xl">
  <li><User2Icon /></li>
  <li><Search /></li>
  <li><ShoppingCart /></li>
</ul>
  </div>
</div>

    ) : (
      <div className="p-5 hover:bg-white  fixed top-0 z-50 w-full bg-transparent transition-all duration-200">
        <div className="flex justify-center items-center relative">
          {/* Logo + Nav Items */}
          <div className="gap-5 flex flex-col">
            <div className="flex h-auto justify-center items-center">
              <img
                className="w-50 h-20 group-hover:invert-100"
                src={logo_black}
                alt="logo"
              />
            </div>

            <ul className="flex gap-10">
              {menu.map((category) => (
                <li
                  key={category.name}
                  onMouseEnter={() => handleMouseEnter(category.name)}
                  onMouseLeave={handleMouseLeave}
                  className="text-sm cursor-pointer relative group"
                >
                  {category.name.toUpperCase()}
                  <span className="absolute top-8 left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Icons */}
          <div>
            <ul className="flex gap-8 absolute right-6 text-sm">
              <li><User2Icon /></li>
              <li><Search /></li>
              <li><ShoppingCart /></li>
            </ul>
          </div>
        </div>

        {/* Submenu Section */}
        <div
          onMouseEnter={() => handleMouseEnter(hover)}
          onMouseLeave={handleMouseLeave}
          className={`transition-all duration-500 ease-in-out ${
            hover
              ? "opacity-100 max-h-65 py-2"
              : "opacity-0 max-h-0 py-0 overflow-hidden"
          }`}
        >
          <div className="flex p-4 cursor-pointer">
            <ul className="flex justify-center gap-6">
              {menu.find((cat) => cat.name === hover)?.title.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {menu.find((cat) => cat.name === hover)?.src && (
              <img
                src={menu.find((cat) => cat.name === hover)?.src}
                alt={hover}
                className="w-80 h-80 object-cover mx-auto"
              />
            )}
          </div>
        </div>
      </div>
    )}
  </>
);
}
export default Navbar;

import React, { useState, useRef } from "react";
import { logo_black } from "../assets/assets.js";
import { Search, ShoppingCart, User2Icon } from "lucide-react";

const Navbar = () => {
  const [hover, setHover] = useState(null);
  const timeoutRef = useRef(null);

  const menu = [
    {
      name: "men",
      title: ["Formal", "Casual", "Sandals", "Sneaker", "Slipper"],
      src: "home_collection1.png",
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
    }, 200); // delay (200ms)
  };

  return (
    <div>
      <div className="flex m-5 justify-center items-center relative">
        {/* Logo + Nav Items */}
        <div className="gap-5 flex flex-col">
          <div className="flex h-auto justify-center items-center">
            <img className="w-50 h-20" src={logo_black} alt="logo" />
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
      {hover && (
        <div
          onMouseEnter={() => handleMouseEnter(hover)}
          onMouseLeave={handleMouseLeave}
          className={` p-4 cursor-pointer transition-all duration-500 ${
            hover ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
        >
          <ul className="flex justify-center gap-6">
            {menu.find((cat) => cat.name === hover)?.title.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

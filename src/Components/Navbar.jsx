import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import Userdropdown from "./Userdropdown";

function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="flex items-center bg-gray-800 h-20 text-white px-4">
        <button onClick={showSidebar} className="text-xl">
          <FaIcons.FaBars />
        </button>

        <h2 className="ml-4 text-green-500 text-3xl font-bold hidden md:block">
          Optimizer Hub
        </h2>

        <div className="ml-auto">
          <Userdropdown />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="w-full pt-4">
          <li className="w-full">
            <button onClick={showSidebar} className="text-2xl p-4 text-white">
              <AiIcons.AiOutlineClose />
            </button>
          </li>
          {SidebarData.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-4 text-white hover:bg-blue-500"
            >
              <Link to={item.path} className="flex items-center w-full">
                {item.icon}
                <span className="ml-4">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavigationBar;

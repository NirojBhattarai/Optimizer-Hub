import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Word Counter",
    path: "/Wordcounter",
    icon: <AiIcons.AiFillFileWord />,
    cName: "nav-text",
  },
  {
    title: "Age Calculator",
    path: "/Agecalculator",
    icon: <FaIcons.FaCalculator />,
    cName: "nav-text",
  },
  {
    title: "Length Converter",
    path: "/Lengthconverter",
    icon: <FaIcons.FaRuler />,
    cName: "nav-text",
  },
  {
    title: "Weight Converter",
    path: "/Weightconverter",
    icon: <FaIcons.FaWeight />,
    cName: "nav-text",
  },
];

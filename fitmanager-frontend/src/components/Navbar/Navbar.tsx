"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { navConfig } from "@/config/navConfig";
import Link from "next/link";
import NavButtons from "./NavButtons";
import Image from "next/image";
import Dashboard from "./Dashboard";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex fixed top-0 z-50 w-full h-[4rem] bg-white text-black pt-2 pb-2 shadow-sm border-b-[1px] border-gray-200">
      <div className="flex justify-center items-center w-4-12 ml-4 p-4">

          <Image src="/LogoFitManager.png" alt="logo" width={50} height={50} />

        <Link href={"/home"}>
          <h1 className="ml-2 cursor-pointer text-xl font-bold">FitManager</h1>
        </Link>
      </div>
      <div className="flex w-11/12 justify-end items-center mr-4">
        {/* Ícono de hamburguesa para móviles */}
        <div className="md:hidden">
          <Menu className="cursor-pointer" onClick={toggleMenu} />
        </div>
        {/* Menú de navegación */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:relative top-[4rem] md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          {navConfig.map((navLink) => (
            <Link
              className="block p-2 pr-2 pl-2 ml-4 hover:bg-gray-100 transition duration-300 ease rounded-lg text-center "
              key={navLink.id}
              href={navLink.href}
            >
              {navLink.name}
            </Link>
          ))}
          <Dashboard />
          <NavButtons />
        </div>
      </div>
    </div>
  );
}

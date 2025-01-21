
import { navConfig } from "@/config/navConfig";
import Link from "next/link";
import NavButtons from "./NavButtons";

export default function Navbar() {

  return (
    <div className="flex fixed top-0 w-full h-[4rem] bg-white text-black pt-2 pb-2 shadow-sm border-b-[1px] border-gray-200">
      <div className="flex justify-center items-center w-2-12 ml-4">
        <h1 className="text-xl font-bold">FitManager</h1>
      </div>
      <div className="flex w-11/12 justify-end items-center mr-4">
        {navConfig.map((navLink) => {       
                return (
                    <Link className="p-1 pr-2 pl-2 ml-4 hover:bg-gray-100 transition duration-300 ease rounded-lg" key={navLink.id} href={navLink.href}>{navLink.name}</Link>
                )
              
            })}
            <NavButtons />
        </div>
    </div>
  );
}
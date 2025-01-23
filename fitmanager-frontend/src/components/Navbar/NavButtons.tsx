"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButtons() {
  const pathname = usePathname();

  if (pathname === "/register") {
    return (
		<div className="flex justify-center items-center p-2">
			<Link
				className="w-[12rem] text-center p-1 ml-4 bg-gray-300 hover:bg-gray-200 transition duration-300 ease rounded-lg border-[1px] border-gray-400"
				href="/login"
			>
				Iniciar Sesión
			</Link>
		</div>
    );
  } else if (pathname === "/login") {
    return (
		<div  className="flex justify-center items-center p-2">
			<Link
				className="w-[12rem] text-center p-1 ml-4 bg-black text-white hover:bg-gray-800 transition duration-300 ease rounded-lg border-[1px] border-gray-400"
				href="/register"
			>
				Registrarse
			</Link>
		</div>
		);
  }

  return (
    <div className="flex justify-center items-center p-2">
      <Link
        className="w-[10rem] text-center p-1 ml-4 bg-gray-300 hover:bg-gray-200 transition duration-300 ease rounded-lg border-[1px] border-gray-400"
        href="/login"
      >
        Iniciar Sesión
      </Link>
      <Link
        className="w-[10rem] text-center text-gray-100 p-1 ml-4 bg-black hover:bg-gray-800 rounded-lg border-b-2 border-black"
        href="/register"
      >
        Registrarse
      </Link>
    </div>
  );
}

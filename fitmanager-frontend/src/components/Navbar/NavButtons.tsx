"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButtons() {
  const pathname = usePathname();

  if (pathname === "/auth/register") {
    return (
      <Link
        className="w-[12rem] text-center p-1 ml-4 bg-gray-300 hover:bg-gray-200 transition duration-300 ease rounded-lg border-[1px] border-gray-400"
        href="/auth/login"
      >
        Iniciar Sesión
      </Link>
    );
  } else if (pathname === "/auth/login") {
    return (
      <Link
        className="w-[12rem] text-center p-1 ml-4 bg-black text-white hover:bg-gray-800 transition duration-300 ease rounded-lg border-[1px] border-gray-400"
        href="/auth/register"
      >
        Registrarse
      </Link>
    );
  }

  return (
    <>
      <Link
        className="w-[10rem] text-center p-1 ml-4 bg-gray-300 hover:bg-gray-200 transition duration-300 ease rounded-lg border-[1px] border-gray-400"
        href="/auth/login"
      >
        Iniciar Sesión
      </Link>
      <Link
        className="w-[10rem] text-center text-gray-100 p-1 ml-4 bg-black hover:bg-gray-800 rounded-lg border-b-2 border-black"
        href="/auth/register"
      >
        Registrarse
      </Link>
    </>
  );
}

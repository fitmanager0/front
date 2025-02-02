import CoachCard from "@/components/CoachCard/CoachCard";
import { coaches } from "@/config/coaches";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-[500px]">
        <Image
          src="/ImgHome.jpeg"
          alt="home"
          className="w-full h-full object-cover"
          width={3000}
          height={2000}
        />

        <div className="absolute inset-0 bg-gray-500 opacity-50"></div>

        <div className="absolute inset-0 flex items-center justify-center bg-gray-400/20">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/LogoFitManager.png"
              alt="logo"
              width={200}
              height={200}
            />
            <h1 className="text-black text-center text-5xl font-bold">
              FitManager
            </h1>
            <div className="font-serif">
              <Link
                className="w-[10rem] text-center m-2 text-black p-2 bg-gray-300 hover:bg-gray-200 transition duration-300 ease rounded-lg border-[1px] border-gray-400"
                href="/aboutus"
              >
                ¿Quienes somos?
              </Link>
              <Link
                className="w-[12rem] text-center p-2 mr-4 bg-black text-white hover:bg-gray-800 hover:border-gray-950 transition duration-300 ease rounded-lg border-[1px] border-black"
                href="/login"
              >
                Ingresar
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="m-10 font-bold text-2xl">
          <h1>Entrenadores</h1>
          <hr className="ml-4 border-b-1 border-black w-[9rem]" />
        </div>
        <div>
          <div className="flex justify-center items-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 mb-20">
              {coaches.map((coach) => (
                <CoachCard
                  key={coach.id}
                  id={coach.id}
                  name={coach.name}
                  img={coach.img}
                  description={coach.description}
                  email={coach.email}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

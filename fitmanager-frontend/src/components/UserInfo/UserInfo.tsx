import Link from "next/link";

export default function UserInfo({
  id,
  name,
  email,
  active,
}: {
  id: string;
  name: string;
  email: string;
  active: boolean;
}) {
  return (
    <div className="grid grid-cols-4 w-full text-center border-gray-200 border-t-[1px] border-b-[1px] py-2">
      <div>{name}</div>
      <div>{email}</div>
      <div
        className={
          active ? "text-green-500 font-bold" : "text-red-500 font-bold"
        }
      >
        {active ? "Activo" : "Inactivo"}
      </div>
      <div>
        <Link
          className="w-[12rem] text-center text-sm p-2 ml-4 bg-black text-white hover:bg-gray-800 transition duration-300 ease rounded-md border-[1px] border-gray-400"
          href={`/users/${id}`}
        >
          Detalles
        </Link>
      </div>
    </div>
  );
}

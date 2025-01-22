"use client";
import UserInfo from "@/components/UserInfo/UserInfo";
import { getUsers } from "@/helpers/getUsers";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const usersData = getUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredUsers, setFilteredUsers] = useState(usersData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    setSearchTerm(searchText);
    filterUsers(searchText, statusFilter);
  };

  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;
    setStatusFilter(filter);
    filterUsers(searchTerm, filter);
  };

  const filterUsers = (searchText: string, filter: string) => {
    const filtered = usersData.filter((user) => {
      const matchesSearch = user.name.toLowerCase().includes(searchText);
      const matchesActivity =
        filter === "all" ||
        (filter === "active" && user.isActive) ||
        (filter === "inactive" && !user.isActive);
      return matchesSearch && matchesActivity;
    });
    setFilteredUsers(filtered);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center mt-20">
      <div className="flex w-full gap-4 p-4">
        <div className="w-4/12">
          <h1 className="text-2xl font-bold">Panel Administración</h1>
        </div>
        <div className="flex w-5/12 gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="border-[1px] border-gray-200 rounded-full focus:outline-none hover:border-gray-300 focus:border-gray-400 p-2 w-full"
            placeholder="Ingresa un nombre"
          />
          <select
            className="border-[1px] border-gray-200 rounded-full focus:outline-none hover:border-gray-300 focus:border-gray-400 p-2"
            value={statusFilter}
            onChange={handleStatusFilter}
            name=""
            id=""
          >
            <option value="all" disabled>
              Filtrar
            </option>
            <option value="all">Todos lo usuarios</option>
            <option value="active">Activos</option>
            <option value="inactive">Inactivos</option>
          </select>
        </div>
      </div>
      <div className="flex w-full gap-4 p-4">
        <div className="w-2/12 max-h-fit flex flex-col border-[1px] border-gray-200 rounded-lg">
          <Link href="/administration">
            <div className="flex flex-col w-full gap-4 justify-center items-center border-b-[1px] p-4 bg-gray-100 transition duration-300 ease cursor-pointer">
              <h1 className="text-large">Usuarios</h1>
            </div>
          </Link>
          <Link href="/administration/trainers">
            <div className="flex flex-col w-full gap-4 justify-center items-center border-b-[1px] p-4 hover:bg-gray-100 transition duration-300 ease cursor-pointer">
              <h1 className="text-large">Entrenadores</h1>
            </div>
          </Link>
          <Link href="/administration/metrics">
            <div className="flex flex-col w-full gap-4 justify-center items-center border-b-[1px] p-4 hover:bg-gray-100 transition duration-300 ease cursor-pointer">
              <h1 className="text-large">Métricas</h1>
            </div>
          </Link>
          <Link href="/administration/administrators">
            <div className="flex flex-col w-full gap-4 justify-center items-center p-4 hover:bg-gray-50 transition duration-300 ease cursor-pointer">
              <h1 className="text-large">Administradores</h1>
            </div>
          </Link>
        </div>
        <div className="w-10/12 flex flex-col items-center border-[1px] border-gray-200 rounded-lg">
          <div className="grid grid-cols-4 w-full text-center bg-gray-100 border-gray-200 border-b-[1px] py-2">
            <div className="font-semibold">ID</div>
            <div className="font-semibold">Nombre</div>
            <div className="font-semibold">Estado de la Cuenta</div>
            <div className="font-semibold"></div>
          </div>
          <div className="w-full flex flex-col items-center border-gray-200">
            {filteredUsers.map((user) => (
              <UserInfo
                key={user.id}
                id={user.id}
                name={user.name}
                active={user.isActive}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

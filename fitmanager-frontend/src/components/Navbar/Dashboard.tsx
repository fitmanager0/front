"use client";
import { useState } from "react"; // Importar useState
import { FaCircleUser } from "react-icons/fa6";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { LogOut } from 'lucide-react';

export default function Dashboard() {

	const { user, isLoading, logout } = useAuth(); 
	const [isMenuOpen, setIsMenuOpen] = useState(false); 

	if (isLoading) {
		return <div>Cargando...</div>;
	}

	if (!user) {
		return null;
	}

	
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	
	const handleLogout = () => {
		logout();
		setIsMenuOpen(false); 
	};

	return (
		<div className="flex items-center">
			{/* Panel de administración (solo para roles 1 y 2) */}
			
			
			<div className="relative">
				
				<div
					className="flex justify-center items-center p-1 hover:bg-gray-100 rounded-lg ml-4 mr-4 cursor-pointer"
					onClick={toggleMenu}
				>
					<FaCircleUser size={26} className="transition duration-300 ease" />
				</div>

				{isMenuOpen && (
					<div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
						{(user.id_rol === 1 || user.id_rol === 2) && (
							<Link href="/dashboard/administration">
								<div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
									Administración
								</div>
							</Link>
						)}
						<Link href="/dashboard/user">
							<div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
								Mi Perfil
							</div>
						</Link>
						
						<button
							onClick={handleLogout}
							className="w-full text-left  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-start items-center gap-2" 
						>
								Cerrar Sesión <LogOut  size={18} />
						</button>
						
						
					</div>
				)}
			</div>

			
		</div>
	);
}


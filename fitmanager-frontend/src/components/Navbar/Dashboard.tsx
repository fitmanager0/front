"use client";
import { useState, useEffect, useRef } from "react"; // Importar useEffect y useRef
import { FaCircleUser } from "react-icons/fa6";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { LogOut } from 'lucide-react';

export default function Dashboard() {
	const { user, isLoading, logout } = useAuth();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null); // Referencia al menú desplegable
	// Efecto para detectar clics fuera del menú
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// Verificar si el clic fue fuera del menú
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false); // Cerrar el menú
			}
		};

		// Agregar el event listener al document
		document.addEventListener("mousedown", handleClickOutside);

		// Limpiar el event listener al desmontar el componente
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	if (isLoading) {
		return <div>Cargando...</div>;
	}

	if (!user) {
		return null;
	}

	// Función para alternar la visibilidad del menú
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Función para cerrar sesión
	const handleLogout = () => {
		logout();
		setIsMenuOpen(false); // Cerrar el menú después de cerrar sesión
	};

	

	return (
		<div className="flex items-center">
			{/* Contenedor relativo para el ícono de usuario y el menú desplegable */}
			<div className="relative" ref={menuRef}>
				{/* Ícono de usuario con menú desplegable */}
				<div
					className="flex justify-center items-center p-1 hover:bg-gray-100 rounded-lg ml-4 mr-4 cursor-pointer"
					onClick={toggleMenu}
				>
					<FaCircleUser size={26} className="transition duration-300 ease" />
				</div>

				{/* Menú desplegable */}
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
							className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-start items-center gap-2"
						>
							Cerrar Sesión <LogOut size={18} />
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
"use client";
import { useAuth } from "@/context/AuthContext";
import { ILogin } from "@/interfaces/ILogin";
import React, { useState } from "react";

const Login: React.FC = () => {
  const { login } = useAuth()
  const [formData, setFormData] = useState<ILogin>({
    email: "",
    password: "",
  });

	const [error, setError] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setError("");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
	  
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	  
		if (!formData.email && !formData.password) {
		  setError("Todos los campos son obligatorios.");
		  return;
		} else if (!formData.email || !emailRegex.test(formData.email)) {
		  setError("Ingresa un correo electrónico válido.");
		  return;
		} else if (!formData.password) {
		  setError("Ingresa una contraseña.");
		  return;
		}
	  
		setError("");
		await login(formData);
	  };

	return (
		<div className="flex min-h-screen bg-[url('/fondo-register-login.jpg')] bg-cover bg-center">
			{/* Contenedor vacío para ocupar el espacio en pantallas grandes */}
			<div className="hidden md:block md:w-1/2 "></div>

			{/* Contenedor del formulario */}
			<div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-36 md:justify-start md:pr-20">
				<div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg ">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
						Iniciar sesión
					</h1>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label htmlFor="email" className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Correo electrónico"
								value={formData.email}
								onChange={handleChange}
								className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
							/>
						</div>
						<div className={error ? "mb-2" : "mb-2"}>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700">
								Contraseña
							</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Contraseña"
								value={formData.password}
								onChange={handleChange}
								className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
							/>
						</div>
						<div className="h-4 mb-3">
						{error && <p className="text-red-600 text-sm mb-5 text-center">{error}</p>}
						</div>
						<button
							type="submit"
							className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
						>
							Iniciar sesión
						</button>

						<div className="mt-4 text-center">
							<p className="text-sm text-gray-700">
								¿No tienes una cuenta?{" "}
								<a
									href="/register"
									className="text-indigo-600 hover:underline"
								>
									Regístrate
								</a>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
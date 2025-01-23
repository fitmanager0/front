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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    setError("");
    await login(formData);
  };

  return (
    <div className="flex h-[40rem] bg-[url('/fondo-register-login.jpg')] bg-cover bg-center">
      <div className="w-1/2"></div>

      <div className="w-1/2 flex items-start justify-center pt-20">
        <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
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
            <div className="mb-6">
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
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
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

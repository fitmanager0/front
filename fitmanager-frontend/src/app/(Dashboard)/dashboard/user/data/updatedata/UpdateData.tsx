"use client"
import { Toast } from '@/components/Toast/Toast';
import ToastConditional from '@/components/ToastConditional/ToastConditional';
import { useAuth } from '@/context/AuthContext';
import { putUpdateData } from '@/helpers/putUpdateData';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export interface IUpdateDataForm {
  name: string;
  birthdate: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}

export default function UpdateData() {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState<IUpdateDataForm>({
    name: "",
    birthdate: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        birthdate: user.birthdate || "",
        phone: user.phone || "",
        address: user.address || "",
        city: user.city || "",
        country: user.country || "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      throw new Error("No se encontró el usuario en la sesión.");
    }
    const confirmUpdate = await ToastConditional();
    if (!confirmUpdate) return;

    try {
      const newUserData = await putUpdateData(user?.id_user, formData);
      Toast.fire({ icon: "success", title: "Datos actualizados con éxito." });
      router.push("/dashboard/user/data");
      setUser(newUserData)
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
    }
  };

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-6 text-center">Actualizar Datos de Usuario</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre y Apellido
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre completo"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ingresa un teléfono"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Dirección
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Ingresa una dirección"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Ciudad
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Ingresa una ciudad"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            País
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Ingresa un país"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="col-span-full flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-950 transition duration-300 ease focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Actualizar Datos
          </button>
        </div>
      </form>
    </div>
  );
}

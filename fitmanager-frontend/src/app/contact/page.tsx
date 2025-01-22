"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, message } = formData;

    if (!fullName || !email || !message) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setError("");
    console.log("Datos enviados:", formData);

    setFormData({ fullName: "", email: "", message: "" });
  };

  
  return (
    <div className="flex h-[40rem] bg-[url('/img-contact.jpeg')] bg-cover bg-center">
      
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4 h-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713573646!2d-58.38414532521114!3d-34.60373887295425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1737565902072!5m2!1ses!2sar"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Contactenos
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Tu nombre completo"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
            >
              Enviar
            </button>
          </form>
          <div className="flex space-x-10 mt-5 justify-center">
          <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-800 hover:text-pink-600"
              >
                <FaInstagram size={50} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-gray-800 hover:text-blue-600"
              >
                <FaFacebook size={50} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="text-gray-800 hover:text-red-400"
              >
                <FaYoutube size={55} />
              </Link>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

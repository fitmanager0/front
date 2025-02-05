'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutUsPage() {
  const images = [
    "/gimnasio.jpeg",
    "/gimnasio2.jpg",
    "/gimnasio3.jpeg",
    "/gimnasio4.jpeg",
    "/gimnasio5.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/ImagenSobreNosotros.webp"
          alt="Gym Equipment"
          fill
          className="object-cover brightness-50"
          priority
        />
        <motion.div
          className="flex z-10"
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <span
            className="text-6xl md:text-8xl font-extrabold italic text-black pr-2"
            style={{ WebkitTextStroke: "0.3px white" }}
          >
            ¿QUIÉNES
          </span>
          <span
            className="text-6xl md:text-8xl font-extrabold italic text-orange-500 pl-2"
            style={{ WebkitTextStroke: "0.3px white" }}
          >
            SOMOS?
          </span>
        </motion.div>
      </div>

      
      <section className="container mx-auto px-4 py-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl text-gray-700 mb-4"
        >
          Somos una plataforma dedicada a optimizar tu experiencia fitness,<br />
          conectándote con tus metas de forma efectiva.
        </motion.p>

        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src="/LogoFitManager.png" alt="FitManager Logo" width={120} height={120} />
          </motion.div>
        </div>

    
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl text-gray-900 font-extrabold italic mb-4"
        >
          ¿Qué es lo que hacemos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl text-gray-700 mb-4"
        >
          Brindar un acompañamiento integral a cada estudiante, ofreciendo rutinas personalizadas, <br />
          atención especializada y un seguimiento continuo para garantizar el progreso y <br />
          el logro de sus objetivos fitness de manera efectiva y sostenible.
        </motion.p>
      </section>

    
      <section className="bg-white py-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl text-center font-extrabold italic text-black mb-6"
        >
          A continuación, adjuntamos una galería de imágenes con la maquinaria que podrás disfrutar adquiriendo nuestros servicios.
        </motion.h2>

        <div className="relative max-w-5xl mx-auto h-[600px] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            fill
            className="object-cover w-full h-full transition-opacity duration-1000 ease-in-out"
            priority
          />
        </div>
      </section>
    </div>
  );
}

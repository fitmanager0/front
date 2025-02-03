"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPaymentStripePage() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<motion.div
				className="container max-w-2xl  p-6 bg-green-800 rounded-2xl shadow-lg text-center"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: "spring", stiffness: 100 }}
					className="flex items-center justify-center text-green-200 mb-4"
				>
					<CheckCircle size={60} />
				</motion.div>
				<h1 className="text-2xl text-green-400 font-bold">¡Pago Exitoso!</h1>
				<p className="text-white mt-2">Tu pago se ha procesado correctamente.</p>
				<p className="text-gray-300 text-sm mt-1">
					Nuestros administradores se pondrán en contacto contigo pronto.
				</p>
				<Link href={"/dashboard/user"} >
				<Button className="mt-4 w-full bg-green-500 hover:bg-green-600">
					Volver al panel de usuario
				</Button>
				</Link>
			</motion.div>
				
		</div>
	);
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPaymentStripePage() {
	return (
		<div className="w-full mt-40 h-auto flex justify-center">
			<motion.div
				className="container max-w-2xl  p-6 bg-white border-[1px] border-gray-100 rounded-2xl shadow-2xl text-center"
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
					<CheckCircle size={60} className="text-green-500" />
				</motion.div>
				<h1 className="text-2xl text-green-500 font-bold">¡Pago Exitoso!</h1>
				<p className="text-black mt-2">Tu pago se ha procesado correctamente.</p>
				<p className="text-gray-500 text-sm mt-1">
					Nuestros administradores se pondrán en contacto contigo pronto.
				</p>
				<Link href={"/dashboard/user"} >
				<Button className="mt-4 w-full bg-black hover:bg-black/80 transition duration-300 ease">
					Volver al panel de usuario
				</Button>
				</Link>
			</motion.div>
				
		</div>
	);
}

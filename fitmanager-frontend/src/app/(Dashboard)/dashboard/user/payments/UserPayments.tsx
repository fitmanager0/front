/* eslint-disable @typescript-eslint/no-unused-vars */

import ButtonCheckOutPayment from "@/components/ClientOnly/ButtonCheckOutPayment";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

// import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
// import axios from "axios";
// import { useState } from "react";
import { Stripe } from "stripe";


async function loadPricesByStripe() {
	try {
	  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
	  const prices = await stripe.prices.list();
  
	  if (!prices.data || prices.data.length === 0) {
		throw new Error("No prices found");
	  }
  
	  const sortedPrices = prices.data.sort((a, b) => a.unit_amount! - b.unit_amount!);
	  return sortedPrices;
	} catch (error) {
	  console.error("Error loading prices:", error);
	  return []; // Retorna un arreglo vacío en caso de error
	}
  }
  


export default async function UserPayments() {


	// const [preferenceId, setPreferenceId] = useState<string | null>(null);
	// initMercadoPago('APP_USR-35816082-943c-430a-8f7d-1eeac9ad1f49');

	// const createPreference = async () => {
	// 	try {
	// 		const response = await axios.post("http://localhost:3001/payment",
	// 		{
	// 			items: [
	// 			{
	// 				title: "Plan Basico",
    //                 quantity: 1,
    //                 price: 5000,
	// 				currency_id: "ARS"
	// 			},
	// 			{
	// 				title: "Plan Pro",
	// 				quantity: 1,
	// 				price: 7500,
	// 				currency_id: "ARS"
	// 			},
	// 			{
	// 				title: "Plan Avanzado",
	// 				quantity: 1,
	// 				price: 15000,
	// 				currency_id: "ARS"
	// 			}
	// 			]
	// 		})
	// 		const { id } = response.data;
	// 		return id;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// const handlePayment = async () => {
	// 	const id = await createPreference();
	// 	if (id) {
	// 		setPreferenceId(id);
	// 	}
	// }

	//Stripe 
	const prices = await loadPricesByStripe();
	console.log(prices);
  return (
    <div>
		<h1 className="text-2xl font-bold p-4 text-center">Planes de Usuario</h1>
			<div className="grid md:grid-cols-3 gap-8 mb-16">
				{prices.map((price) => (
					
				<Card className="flex flex-col" key={price.id}>
					<CardHeader>
						<h3 className="text-xl font-bold text-center">{price.nickname}</h3>
						<div className="text-center">
						<span className="text-4xl font-bold">
							{price.unit_amount !== null ? `${price.unit_amount / 100}` : 'N/A'}
						</span>
							<span className="text-sm text-gray-500">/mes</span>
						</div>
					</CardHeader>
					<CardFooter>
						<ButtonCheckOutPayment 
							priceId={price.id}
						/>
					</CardFooter>
				</Card>

				/* <Card className="flex flex-col">
					<CardHeader>
						<h3 className="text-xl font-semibold text-center">Pro</h3>
						<div className="text-center">
							<span className="text-4xl font-bold">$7500</span>
							<span className="text-sm text-gray-500">/mes</span>
						</div>
					</CardHeader>
					<CardContent className="flex-grow">
						<ul className="space-y-2">
							<li className="flex items-center gap-2">
								<span>• Acceso al Gimnasio</span>
							</li>
							<li className="flex items-center gap-2">
								<span>• Asistencia Pasiva</span>
							</li>
							<li className="flex items-center gap-2">
								<span>• Registro de avances</span>
							</li>
							<li className="flex items-center gap-2">
								<span>• Plan de entrenamiento</span>
							</li>
						</ul>
					</CardContent>
					<CardFooter>
					<Button className="w-full" >Seleccionar</Button>
					</CardFooter>
				</Card> */

				/* Advanced Plan */
				/* <Card className="flex flex-col">
					<CardHeader>
						<h3 className="text-xl font-semibold text-center">Avanzado</h3>
						<div className="text-center">
							<span className="text-4xl font-bold">$15000</span>
							<span className="text-sm text-gray-500">/mes</span>
						</div>
					</CardHeader>
					<CardContent className="flex-grow">
						<ul className="space-y-2">
							<li className="flex items-center gap-2">
								<span>• Acceso al Gimnasio</span>
							</li>
							<li className="flex items-center gap-2">
								<span>• Asistencia Activa</span>
							</li>
							<li className="flex items-center gap-2">
								<span>• Registro de avances</span>
							</li>
							<li className="flex items-center gap-2">
								<span>• Plan de entrenamiento</span>
							</li>
							<li className="flex items-center gap-2">
								<span>• Plan dietético</span>
							</li>
						</ul>
					</CardContent>
					<CardFooter>
						<Button className="w-full" >Seleccionar</Button>
					</CardFooter>
				</Card> */
					
				))}
			</div>
			<div className="justify-center items-center text-center p-4">
				<p className="text-center font-semibold">Pago con Stripe en Dolares </p>
			</div>
			{/* <div>
				{preferenceId &&
					<Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
			</div> */}
    </div>
  );
}
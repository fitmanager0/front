import React from 'react';
import { CircleAlert } from 'lucide-react';

export default function SuccessPaymentStripePage() {
  return (
	<div className='w-full h-screen p-10'>
		<div className='container mx-auto px-4 py-12 bg-green-800 rounded-2xl'>
			<div className='flex gap-4 pb-4'>
				<CircleAlert className='text-green-200' size={45} />
				<h1 className='text-2xl text-green-400 items-center text-center'>Checkout Success</h1>
			</div>
			<p className='text-white'>Tu pago se ha realizado exitosamente.</p>
			<p>Dentro de poco nuestros administradores te contactarán</p>
		</div>
	  </div>
  )
}

import { NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function POST(request: Request) {

	const { priceId } = await request.json();

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
	const session = await stripe.checkout.sessions.create({
		mode: 'subscription',
		payment_method_types: ['card'],
		line_items: [
			{
				price: priceId,
				quantity: 1,
                
			}
		],
		success_url: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/user/payments/success`,
		cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/user/payments/`,
	})
	
	return NextResponse.json({ 
		url: session.url
	});
}

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutUsPage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<div className="relative h-[600px] flex items-center justify-center">
				<Image
					src="/ImagenSobreNosotros.webp"
					alt="Gym Equipment"
					fill
					className="object-cover brightness-50"
					priority
				/>
				<h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Sobre Nosotros</h1>
			</div>

			{/* Mission Section */}
			<section className="container mx-auto px-4 py-16 max-w-3xl text-center">
				<h2 className="text-3xl font-bold mb-6">Misión</h2>
				<p className="text-gray-600 mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure.
				</p>
				<div className="flex justify-center">
					<Image src="/LogoFitManager.png" alt="Gym Logo" width={100} height={100} className="opacity-80" />
				</div>
			</section>

			{/* Features Section */}
			<section className="container mx-auto px-4 py-16">
				<h2 className="text-3xl font-bold mb-12">¿Qué nos hace diferentes?</h2>
				<div className=" gap-8 flex flex-col">
					<Card>
						<CardContent className="pt-6">
							<h3 className="text-xl font-semibold mb-4">
								Planes de membresía flexibles para adaptarse a tu estilo de vida
							</h3>
							<p className="text-gray-600 mb-4">
								Body text for whatever you&#39;d like to say. Add main takeaway points, quotes, anecdotes, or even a very
								very short story.
							</p>
						</CardContent>
						<CardFooter>
							<Button variant="outline" className=" bg-slate-100 hover:bg-slate-200">
								Más información
							</Button>
						</CardFooter>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<h3 className="text-xl font-semibold mb-4">Acceso 24/7 para que nunca tengas excusas</h3>
							<p className="text-gray-600 mb-4">
								Body text for whatever you&#39;d like to say. Add main takeaway points, quotes, anecdotes, or even a very
								very short story.
							</p>
						</CardContent>
						<CardFooter>
							<Button variant="outline" className=" bg-slate-100 hover:bg-slate-200">
								Más información
							</Button>
						</CardFooter>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<h3 className="text-xl font-semibold mb-4">
								Entrenamientos personalizados basados en tus metas específicas
							</h3>
							<p className="text-gray-600 mb-4">
								Body text for whatever you&#39;d like to say. Add main takeaway points, quotes, anecdotes, or even a very
								very short story.
							</p>
						</CardContent>
						<CardFooter>
							<Button variant="outline" className=" bg-slate-100 hover:bg-slate-200">
								Más información
							</Button>
						</CardFooter>
					</Card>
				</div>
			</section>
		</div>
	)
}


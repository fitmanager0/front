import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react"

export default function PlanesPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			{/* Memberships Section */}
			<h1 className="text-4xl font-bold text-center mb-12">Nuestras Membresías</h1>

			<div className="grid md:grid-cols-3 gap-8 mb-16">
				{/* Basic Plan */}
				<Card className="flex flex-col">
					<CardHeader>
						<h3 className="text-xl font-semibold text-center">Basico</h3>
						<div className="text-center">
							<span className="text-4xl font-bold">$50</span>
							<span className="text-sm text-gray-500">/mo</span>
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
						</ul>
					</CardContent>
					<CardFooter>
						<Button className="w-full">Seleccionar</Button>
					</CardFooter>
				</Card>

				{/* Pro Plan */}
				<Card className="flex flex-col">
					<CardHeader>
						<h3 className="text-xl font-semibold text-center">Pro</h3>
						<div className="text-center">
							<span className="text-4xl font-bold">$75</span>
							<span className="text-sm text-gray-500">/mo</span>
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
						<Button className="w-full">Seleccionar</Button>
					</CardFooter>
				</Card>

				{/* Advanced Plan */}
				<Card className="flex flex-col">
					<CardHeader>
						<h3 className="text-xl font-semibold text-center">Avanzado</h3>
						<div className="text-center">
							<span className="text-4xl font-bold">$150</span>
							<span className="text-sm text-gray-500">/mo</span>
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
						<Button className="w-full">Seleccionar</Button>
					</CardFooter>
				</Card>
			</div>

			{/* Services Section */}
			<section className="mb-16">
				<h2 className="text-2xl font-bold mb-8">Nuestros Servicios</h2>
				<div className="grid md:grid-cols-3 gap-8">
					<Card>
						<CardContent className="pt-6">
							<h3 className="font-semibold mb-2">Acceso al Gimnasio</h3>
							<p className="text-gray-600">Tendrás acceso a todo el espacio de instalaciones del gimnasio.</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<h3 className="font-semibold mb-2">Plan de Entrenamiento</h3>
							<p className="text-gray-600">
								A partir de tus datos, condición física y necesidad, crearemos un plan de entrenamiento según tus
								objetivos.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<h3 className="font-semibold mb-2">Plan Dietético</h3>
							<p className="text-gray-600">
								Crearemos un plan de alimentación a partir de tu salud y física según tus objetivos.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<h3 className="font-semibold mb-2">Asistencia Activa</h3>
							<p className="text-gray-600">
								Tendrás asistencia personal por parte de un entrenador que se encargará de acompañarte durante todo tu
								entrenamiento (Recuerda organizar tu horario)
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<h3 className="font-semibold mb-2">Asistencia Pasiva</h3>
							<p className="text-gray-600">
								Tendrás asistencia por parte de los entrenadores y recomendaciones al momento de pedirles consejo o
								ayuda.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="pt-6">
							<h3 className="font-semibold mb-2">Registro de avances</h3>
							<p className="text-gray-600">
								Tomaremos medidas de tu cuerpo y fotografías para tener un registro de tu avance durante todo el
								proceso.
							</p>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Footer */}
			<footer className="grid md:grid-cols-3 gap-8 border-t pt-8">
				<div>
					<h4 className="font-semibold mb-4">Información de Contacto</h4>
					<div className="space-y-2 text-sm">
						<p>Dirección: Calle Ficticia 123, Ciudad, País</p>
						<p>Teléfono: +54 123 456 789</p>
						<p>Email: fitmanager.henry@gmail.com</p>
					</div>
					<div className="mt-4">
						<h5 className="font-semibold mb-2">Horarios de Atención:</h5>
						<div className="text-sm space-y-1">
							<p>Lunes a Viernes: 6:00 AM - 10:00 PM</p>
							<p>Sábados: 8:00 AM - 6:00 PM</p>
							<p>Domingos: Cerrado</p>
						</div>
					</div>
				</div>
				<div>
					<h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
					<ul className="space-y-2 text-sm">
						<li>
							<Link href="/" className="hover:underline">
								Inicio
							</Link>
						</li>
						<li>
							<Link href="/planes" className="hover:underline">
								Planes
							</Link>
						</li>
						<li>
							<Link href="/sobre-nosotros" className="hover:underline">
								Sobre Nosotros
							</Link>
						</li>
						<li>
							<Link href="/contacto" className="hover:underline">
								Contacto
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="font-semibold mb-4">Redes Sociales</h4>
					<div className="flex space-x-4">
						<Link href="#" className="hover:text-gray-600">
							<Twitter className="h-5 w-5" />
						</Link>
						<Link href="#" className="hover:text-gray-600">
							<Instagram className="h-5 w-5" />
						</Link>
						<Link href="#" className="hover:text-gray-600">
							<Youtube className="h-5 w-5" />
						</Link>
						<Link href="#" className="hover:text-gray-600">
							<Linkedin className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}


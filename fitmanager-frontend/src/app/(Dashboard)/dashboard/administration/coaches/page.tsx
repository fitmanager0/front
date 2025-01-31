"use client"
import { getUsers } from '@/helpers/getUsers';
import { IUser } from '@/interfaces/IUser';
import React, { useEffect, useState } from 'react'
import { Eye, Settings, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function CoachesPage() {
	// const [usersData, setUsersData] = useState<IUser[]>([]);
	// const [filteredUsers, setFilteredUsers] = useState<IUser[]>(usersData);
	const [coaches, setCoaches] = useState<IUser[]>([]);
	
	useEffect(() => {
		const fetchUsers = async () => {
		const data = await getUsers();
		const filteredCoaches = data.filter(user => user.id_rol === 2);
			console.log(filteredCoaches);
		setCoaches(filteredCoaches);
		};
	
		fetchUsers();
	}, []);

	
	

	return (
		<div className='p-4'>
			<h1 className="text-2xl font-bold mb-4">Entrenadores</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{coaches.map(coach => (
					<div key={coach.id_user} className="p-4 border rounded-lg shadow-sm flex justify-between">
						<div>
							<h2 className="text-lg font-semibold">{coach.name}</h2>
							<p className="text-gray-600">Email: {coach.email}</p>
							<p className="text-gray-600">Telefono: {coach.phone}</p>
							<p className="text-gray-600">Estado de la Cuenta: <span className={coach.isActive ? 'text-green-500' : 'text-red-500'}>
									{coach.isActive ? 'Activo' : 'Inactivo'}</span>
							</p>
						</div>
						<div className='flex flex-row gap-4'>
							<Link href={`/dashboard/administration/coaches/${coach.id_rol}`} className='pt-2'>
							<Eye  className='hover:text-blue-500'/>
							</Link>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="secondary" size="icon" className="rounded-full">
										<Settings />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent side={"bottom"} align={"end"} >
									<DropdownMenuLabel>Opciones</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem asChild>
										<button className="w-full text-left hover:bg-red-400">
											Eliminar <Trash2 />
										</button> 
									</DropdownMenuItem>
									{/* <DropdownMenuItem asChild>

									</DropdownMenuItem> */}
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
					
				))}
			</div>
		</div>
	)
}

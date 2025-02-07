import { useState, useEffect } from "react";
import Image from "next/image";
import { uploadProfilePicture } from "@/helpers/postPhoto";

interface ProfilePictureUploaderProps {
	userId: string;
}

const ProfilePictureUploader: React.FC<ProfilePictureUploaderProps> = ({ userId }) => {
	const [image, setImage] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Cargar la imagen guardada en localStorage (puedes mejorar esto con un estado global)
		const storedImage = localStorage.getItem(`profile_picture_${userId}`);
		if (storedImage) {
			setImage(storedImage);
		}
	}, [userId]);

	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		setLoading(true);
		try {
			const response = await uploadProfilePicture(userId, file);
			if (response.imageUrl) {
				setImage(response.imageUrl);
				localStorage.setItem(`profile_picture_${userId}`, response.imageUrl); // Guardar en localStorage
			}
		} catch (error) {
			console.error("Error al subir la imagen:", error);
		}
		setLoading(false);
	};

	return (
		<div className="flex flex-col items-center">
			<div className="relative w-32 h-32">
				{image ? (
					<Image
						src={image}
						alt="Foto de perfil"
						className="rounded-full border-2 border-gray-300"
						layout="fill"
						objectFit="cover"
					/>
				) : (
					<div className="w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full border-2 border-gray-300">
						<span className="text-gray-600">Sin foto</span>
					</div>
				)}
			</div>

			<label className="mt-4 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
				{loading ? "Subiendo..." : "Cambiar foto"}
				<input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
			</label>
		</div>
	);
};

export default ProfilePictureUploader;

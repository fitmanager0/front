import { IFindUserById } from "@/interfaces/IFindUserById";
import axios from "axios";

export const getUserInfo = async (id: string): Promise<IFindUserById | null> => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        const userData = response.data;
        return userData;
    } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
        return null;
    }
};
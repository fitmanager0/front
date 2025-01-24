import { IUser } from "@/interfaces/IUser";
import axios from "axios";


export const getUsers =  async (): Promise<IUser[]> => {
    try {
        const response = await axios.get("http://localhost:3000/user");
        return response.data;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        return [];
    }
}
import { IFindUserById } from "@/interfaces/IFindUserById";
import axios from "axios";

export const getUserInfo = async (id: string): Promise<IFindUserById | null> => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`http://localhost:3000/user/${id}`, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });
    return response.data;
  } catch {
    return null;
  }
};

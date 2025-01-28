/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const getHealthsheet = async (id: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`http://localhost:3000/healthsheet/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error;
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getAllRoutines } from "@/helpers/getAllRoutines";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Toast } from "@/components/Toast/Toast";
import { useAuth } from "@/context/AuthContext";
import { IRoutinesUser } from "@/interfaces/IRoutinesUser";

export default function UserRoutines() {
  const [routines, setRoutines] = useState<IRoutinesUser[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [selectedRoutine, setSelectedRoutine] = useState<string | null>(null);
  const [userRoutine, setUserRoutine] = useState<IRoutinesUser | null>(null);
  const { user } = useAuth();
  const token = localStorage.getItem("token");
  const fetchUserRoutine = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/routines/${user?.id_user}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
      setUserRoutine(response.data);
    } catch (error) {
      console.error("Error al obtener la rutina del usuario:", error);
    }
  };

  useEffect(() => {
    if (!user || !user.id_user) return;

    const fetchUserRoutine = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/routines/${user?.id_user}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response.data);
        setUserRoutine(response.data);
      } catch (error) {
        console.error("Error al obtener la rutina del usuario:", error);
      }
    };

    const fetchRoutines = async () => {
      try {
        const routinesData = await getAllRoutines();
        setRoutines(routinesData);
      } catch (error) {
        console.error("Error al obtener las rutinas:", error);
      }
    };

    fetchRoutines();
    fetchUserRoutine();
  }, [user, token]);

  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(Number(event.target.value));
    setSelectedRoutine(null);
  };

  const handleRoutineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoutine(event.target.value);
  };

  const handleSelectRoutine = async () => {
    if (!selectedRoutine) {
      alert("Por favor, selecciona una rutina.");
      return;
    }
    if (!user || !user?.id_user) {
      Toast.fire({ icon: "error", title: "Usuario no autenticado." });
      return;
    }

    const selectedRoutineData = routines.find(
      (routine) => routine.id_cat.trim() === String(selectedRoutine).trim()
    );

    if (!selectedRoutineData) {
      Toast.fire({ icon: "error", title: "Rutina no encontrada." });
      return;
    }

    const formData = {
      url_routine: selectedRoutineData.url_imagen,
      id_user: user.id_user,
      id_level: selectedRoutineData.id_level,
    };

    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/routines/associate`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      Toast.fire({ icon: "success", title: "Rutina asociada con éxito." });

      fetchUserRoutine();
    } catch (error: any) {
      console.error(
        "Error al asociar la rutina:",
        error.response?.data || error.message
      );
      Toast.fire({ icon: "error", title: "Error al asociar la rutina." });
    }
  };

  const filteredRoutines = routines.filter(
    (routine) => routine.id_level === selectedLevel
  );

  return (
    <div className="w-full flex flex-col items-center rounded-lg min-h-[60vh] p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {["Inicial", "Intermedio", "Avanzado"].map((nivel, index) => {
          const levelRoutines = routines.filter(
            (routine) => routine.id_level === index + 1
          );
          return (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-lg font-bold mb-2">Rutinas Nivel {nivel}</h2>
              {levelRoutines.map((routine, idx) => (
                <Link
                  key={routine.id_cat}
                  href={routine.url_imagen}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="mb-2 w-40">{`Rutina ${String.fromCharCode(
                    65 + idx
                  )}`}</Button>
                </Link>
              ))}
            </div>
          );
        })}
      </div>
      <hr className="m-5 w-2/4 border-gray-100 border-[1px]"/>

      {userRoutine?.url_routine && (
        <div>
          <div className="text-center mb-10">
            <h2 className="text-lg font-bold mb-2">Tu rutina asignada:</h2>
            <Link
              href={userRoutine.url_routine}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-40">Ver Rutina</Button>
            </Link>
          </div>
        </div>
      )}


      <div className="flex flex-col md:flex-row gap-4 items-center mb-20">
        <select
          className="border rounded-lg p-2"
          onChange={handleLevelChange}
          value={selectedLevel || ""}
        >
          <option value="" disabled>
            Selecciona un nivel
          </option>
          <option value="1">Nivel Inicial</option>
          <option value="2">Nivel Intermedio</option>
          <option value="3">Nivel Avanzado</option>
        </select>

        <select
          className="border rounded-lg p-2"
          onChange={handleRoutineChange}
          value={selectedRoutine || ""}
          disabled={!selectedLevel}
        >
          <option value="" disabled>
            Selecciona una rutina
          </option>
          {filteredRoutines.map((routine, idx) => (
            <option key={routine.id_cat} value={routine.id_cat}>
              {`Rutina ${String.fromCharCode(65 + idx)}`}
            </option>
          ))}
        </select>

        <Button onClick={handleSelectRoutine}>
          {userRoutine ? "Cambiar rutina" : "Seleccionar rutina"}
        </Button>
      </div>
    </div>
  );
}

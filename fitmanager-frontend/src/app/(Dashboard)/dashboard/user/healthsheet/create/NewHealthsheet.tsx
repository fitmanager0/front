import { useState } from "react";
import * as htmlToImage from "html-to-image";
import { IHealthsheet } from "@/interfaces/IHealthsheet";

export default function NewHealthsheet() {
    console.log();
  const [formData, setFormData] = useState<IHealthsheet>({
    name: "",
    age: "",
    phone: "",
    emergencyContact: "",
    weight: "",
    height: "",
    goals: [],
    preExistingDiseases: "",
    surgeries: "",
    allergies: "",
    currentMedications: "",
    chronicPain: "",
    additionalComments: "",
  });

  const autoResizeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto'; 
    e.target.style.height = `${e.target.scrollHeight}px`; 
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const generateImageAndUpload = () => {
    const formElement = document.getElementById("healthsheet-form");

    if (formElement) {
      htmlToImage.toPng(formElement, {
        style: {
            width: "100%",
            height: "auto", 
            border: "1px solid #ccc",
            padding: "5px",
            boxSizing: "content-box",
          }
      })
        .then((dataUrl) => {
          const imgBlob = dataURItoBlob(dataUrl);

          const formData = new FormData();
          formData.append("file", imgBlob);
          formData.append("upload_preset", "upload");
          formData.append("resource_type", "image");

          fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`, {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((result) => {
              console.log("Imagen subida exitosamente:", result.secure_url);
            })
            .catch((error) => {
              console.error("Error al subir la imagen:", error);
            });
        })
        .catch((error) => {
          console.error("Error al convertir el formulario a imagen:", error);
        });
    }
  };


  function dataURItoBlob(dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([intArray], { type: mimeString });
  }

  return (
    <div>
      <form id="healthsheet-form">
        <div className="p-6">
          <h1 className="text-2xl text-center font-bold mb-4">Nueva Ficha Médica</h1>
          <div className="glex gap-6">
            {[
              { label: "Nombre", name: "name" },
              { label: "Edad", name: "age" },
              { label: "Teléfono", name: "phone" },
              { label: "Contacto de Emergencia", name: "emergencyContact" },
              { label: "Peso (kg)", name: "weight" },
              { label: "Altura (cm)", name: "height" },
              { label: "Enfermedades preexistentes", name: "preExistingDiseases", textarea: true },
              { label: "Cirugías recientes", name: "surgeries", textarea: true },
              { label: "Alergias", name: "allergies", textarea: true },
              { label: "Medicamentos actuales", name: "currentMedications", textarea: true },
              { label: "Dolores crónicos", name: "chronicPain", textarea: true },
              { label: "Comentarios adicionales", name: "additionalComments", textarea: true }
            ].map(({ label, name, textarea }) => (
              <div key={name} className="mb-6">
                <label className="block font-medium">{label}:</label>
                {textarea ? (
                  <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    onInput={autoResizeTextArea} 
                    className="border p-3 w-full rounded resize-none" 
                  />
                ) : (
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className="border p-3 w-full rounded"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <hr className="border-gray-200" />
        <div className="m-6 text-justify">
          <small className="text-gray-500">
            Al completar este formulario, el usuario declara bajo juramento que la información proporcionada es verdadera y precisa.
            El gimnasio se exime de cualquier responsabilidad por lesiones o problemas de salud derivados de la práctica de ejercicio físico,
            siendo el usuario el único responsable de su estado de salud y su capacidad para realizar actividades físicas.
            Se recomienda consultar con un profesional de salud antes de iniciar cualquier rutina de ejercicios.
          </small>
        </div>
        <hr className="border-gray-200" />
      </form>
      <div className="flex justify-center mb-4">
        <button
          onClick={generateImageAndUpload}
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded"
        >
          Generar y Subir Imagen
        </button>
      </div>
    </div>
  );
}

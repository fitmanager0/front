import Swal from "sweetalert2";
import "./ToastConditional.css";

const ToastConditional = async (): Promise<boolean> => {
  const result = await Swal.fire({
    title: "¿Estás seguro?",
    text: "¿Deseas actualizar tus datos?",
    icon: "warning",
    background: "white",
    color: "#333",
    iconColor: "black",
    showCancelButton: true,
    confirmButtonText: "Sí, actualizar",
    cancelButtonText: "Cancelar",
    buttonsStyling: false,
    customClass: {
      popup: "swal-container",
      confirmButton: "swal-confirm-btn",
      cancelButton: "swal-cancel-btn",
    },
  });

  return result.isConfirmed;
};

export default ToastConditional;

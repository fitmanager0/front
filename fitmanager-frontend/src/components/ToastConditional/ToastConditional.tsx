import Swal from "sweetalert2";
import "./ToastConditional.css";

// Definir un tipo para los mensajes
interface ToastMessages {
  title: string;
  text: string;
  confirmButtonText: string;
  cancelButtonText: string;
}

const ToastConditional = async (
  messages: ToastMessages
): Promise<boolean> => {
  const result = await Swal.fire({
    title: messages.title,
    text: messages.text,
    icon: "warning",
    background: "white",
    color: "#333",
    iconColor: "black",
    showCancelButton: true,
    confirmButtonText: messages.confirmButtonText,
    cancelButtonText: messages.cancelButtonText,
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

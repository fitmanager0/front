import Swal from "sweetalert2";

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: 'white',
    color: 'black',
    iconColor: 'black',
    customClass: {
        popup: 'animate-fade-in animate-slide-in mt-14 h-16 flex items-center', // Alinea icono y texto y usa espacio entre ellos
        title: 'text-sm font-thin text-black', 
    },
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
});

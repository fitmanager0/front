
export interface ICoach {
    id: number;
    name: string;
    img: string;
    description: string;
    email: string;
  }
  export const coaches : ICoach[] = [
    {
      id: 1,
      name: "Tomás Laprovitta",
      img: "/entrenador4.jpg",
      description: "Te ayuda a ganar fuerza y mejorar tu rendimiento físico de forma segura.",
      email: "tomas@gmail.com",
    },
    {
      id: 2,
      name: "Danel Torchiari",
      img: "/entrenador3.jpg",
      description: "Experto en ayudar a alcanzar tus objetivos con entrenamientos personalizados.",
      email: "danel@gmail.com",
    },
    {
      id: 3,
      name: "Alexander Van Strahlen",
      img: "/entrenador2.jpg",
      description: "Ideal para quienes buscan mejorar su resistencia y salud cardiovascular.",
      email: "alexander@gmail.com",
    },
    {
      id: 4,
      name: "Gustavo Galdeano",
      img: "/entrenador6.jpg",
      description: "Diseña ejercicios prácticos para mejorar tus movimientos diarios y tu condición física.",
      email: "gustavo@gmail.com",
    },
    {
      id: 5,
      name: "Adriel Pérez",
      img: "/entrenador1.jpg",
      description: "Enseña rutinas efectivas usando solo tu cuerpo como herramienta.",
      email: "adriel@gmail.com",
    },
    {
      id: 6,
      name: "Enrique Castillo",
      img: "/entrenador7.jpg",
      description: "Ayuda a recuperarte y fortalecer tu cuerpo después de lesiones.",
      email: "enrique@gmail.com",
    },
    
  ];
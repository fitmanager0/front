export interface INavConfig {
    id: number;
    name: string;
    href: string;
    private: boolean;
  }
  export const navConfig : INavConfig[] = [
    {
      id: 1,
      name: "Inicio",
      href: "/",
      private: false,
    },
    {
      id: 2,
      name: "Planes",
      href: "/planes",
      private: false,
    },
    {
      id: 3,
      name: "Sobre Nosotros",
      href: "/sobre-nosotros",
      private: false,
    },
    {
      id: 4,
      name: "Contacto",
      href: "/contacto",
      private: false,
    },
  
  ];
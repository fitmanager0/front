export interface IUser {
    id_user: string;
    name: string;
    email: string;
    password: string;
    id_rol: number;
    phone: string;
    address: string;
    city: string;
    country: string;
    isActive: boolean;
    entry_date: Date;
  }
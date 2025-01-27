export interface IFindUserById {
    id: string;
    name: string;
    email: string;
    rol: number;
    birthdate: Date | null;
    phone: string | null;
    address: string | null;
    city: string | null;
    country: string | null;
    active: boolean;
    entry_date: Date;
}
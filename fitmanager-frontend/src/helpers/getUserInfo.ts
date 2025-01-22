import { getUsers } from "./getUsers";

export const getUserInfo = (id: number) => {
    const userData = getUsers().find((user) => user.id === id);
    return userData;
}
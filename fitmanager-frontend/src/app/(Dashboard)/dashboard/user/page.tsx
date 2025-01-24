import UserData from "./UserData";
import NotLoggedRedirect from "@/components/NotLoggedRedirect/NotLoggedRedirect";


export default function User() {
    return (
        <NotLoggedRedirect>
            < UserData />
        </NotLoggedRedirect>
    );
}
"use client";
import MenuUsers from "@/components/MenuUsers/MenuUsers";
import NotLoggedRedirect from "@/components/NotLoggedRedirect/NotLoggedRedirect";
import UpdatePassword from "./UpdatePassword";
import GoogleUser from "@/components/GoogleUser/GoogleUser";

export default function User() {
  return (
    <GoogleUser>
    <NotLoggedRedirect>
      <div className="flex flex-col md:flex-row mt-20">
        <div className="w-10/12 justify-center items-center md:w-2/12 md:h-fit border-[1px] border-gray rounded-lg m-6">
          <MenuUsers />
        </div>
        <div className="flex justify-center items-center w-10/12 border-[1px] border-gray rounded-lg m-6">
          <UpdatePassword />
        </div>
      </div>
    </NotLoggedRedirect>
    </GoogleUser>

  );
}

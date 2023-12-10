import React, { useEffect, useState,useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { AuthContext } from "../../main";
export default function NavBar() {
//   const Status = useContext(AuthContext);
const { isAuthenticated, UserData, SetIsAuthenticated, SetUserData } =
    useContext(AuthContext);
    function Nav() {
        
        return (
            <div className=" bg-primary-color  text-white min-h-[65px] flex items-center justify-between ">
                <div className="flex items-center">
                    <div className="md:hidden   border-2 rounded ml-2 cursor-pointer">
                        <IoMenu className=" text-3xl " />
                    </div>
                    <img
                        src="http://localhost:3000/Logo2.png"
                        alt="Logo"
                        className="w-[100px]"
                    />
                    {/* search bar */}
                    <div className="hidden md:flex items-center    border-2 border-[color:var(--white-gray)] rounded  bg-secondary-color  ">
                        <input
                            type="text"
                            className=" w-[350px] p-1 focus:outline-none bg-secondary-color focus:border-transparent"
                        />
                        <CiSearch
                            className="p-1 rounded
                         bg-transparent font-bold text-4xl cursor-pointer hover:bg-primary-color"
                        />
                    </div>
                </div>

                <div className="">
                    {isAuthenticated ? (
                        <div className="flex items-center">
                            <div className=" hidden  border p-1 rounded mr-2  cursor-pointer md:block">
                                Create Blog
                            </div>
                            {/* Search on mobile */}
                            <CiSearch
                                className="md:hidden font-bold text-4xl 
                             bg-secondary-color mr-2
                             p-1 rounded cursor-pointer "
                            />

                            <IoNotifications className="mx-1 text-xl" />
                            <img
                                src={
                                    UserData && UserData.Profile_Pic
                                        ? UserData.Profile_Pic
                                        : "http://localhost:5173/default_Logo.png"
                                }
                                alt="Profile pic"
                                className="rounded-full w-10 "
                            />
                        </div>
                    ) : (
                        <div className=" flex items-center gap-4">
                            <CiSearch
                                className="md:hidden font-bold text-4xl 
                             bg-secondary-color text--white-gray
                             p-1 rounded cursor-pointer"
                            />
                            <div className="border p-2 rounded mr-2   hover:bg-secondary-color hover:underline cursor-pointer">
                                Login
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/authStatus"
                );

                if (response.ok) {
                    const userData = await response.json();
                    SetIsAuthenticated(userData.isAuthenticated);
                    SetUserData(userData);
                } else {
                    SetIsAuthenticated(false);
                    SetUserData(null);
                }
            } catch (error) {
                console.error("Error checking authentication status:", error);
                SetIsAuthenticated(false);
                SetUserData(null);
            }
        };

        checkAuthStatus();
    }, [SetIsAuthenticated, SetUserData]);


    return <>{<Nav />}</>; // Removed unnecessary curly braces
}

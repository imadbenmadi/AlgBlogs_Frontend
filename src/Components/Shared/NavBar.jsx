import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [data, setdata] = useState(null); 
    function Nav() {
        return (
            <div className=" bg-primary-color  text-white  flex items-center justify-between ">
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
                    <div className="hidden md:flex items-center color p-1 white border-2 rounded  bg-transparent h-fit">
                        <CiSearch className=" font-bold text-2xl cursor-pointer " />
                        <input
                            type="text"
                            className=" bg-transparent  p-1 focus:outline-none focus:border-transparent"
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
                            <CiSearch className="md:hidden font-bold text-2xl cursor-pointer" />

                            <IoNotifications className="mx-1 text-xl" />
                            <img
                                src={
                                    data && data.Profile_Pic
                                        ? data.Profile_Pic
                                        : "http://localhost:5173/default_Logo.png"
                                }
                                alt="Profile pic"
                                className="rounded-full w-10 "
                            />
                        </div>
                    ) : (
                        <div className="border p-2 rounded mr-2  cursor-pointer">
                            Login
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // useEffect(() => {
    //     const checkAuthStatus = async () => {
    //         try {
    //             const response = await fetch(
    //                 "http://localhost:3000/authStatus"
    //             );

    //             if (response.ok) {
    //                 const userData = await response.json();
    //                 setIsAuthenticated(userData.isAuthenticated);
    //                 setdata(userData);
    //             } else {
    //                 setIsAuthenticated(false);
    //                 setdata(null);
    //             }
    //         } catch (error) {
    //             console.error("Error checking authentication status:", error);
    //             setIsAuthenticated(false);
    //             setdata(null);
    //         }
    //     };

    //     checkAuthStatus();
    // }, []);

    return <>{<Nav />}</>; // Removed unnecessary curly braces
}

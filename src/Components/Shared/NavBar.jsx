import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";

export default function NavBar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [data, setdata] = useState(null); // Change the initial state to null

    function Nav() {
        return (
            <div className="bg-gray-800 text-white p-10 flex items-center">
                <img
                    src="http://localhost:3000/Logo.png"
                    alt="Logo"
                    className="w-10 h-10" // Adjusted width and added height for a square logo
                />
                {/* search bar */}
                <div className="ml-4">
                    <CiSearch className="text-white" />
                    <input type="text" className="ml-2 p-2" />
                </div>
                <div className="ml-auto">
                    {isAuthenticated ? (
                        <div className="flex items-center">
                            <div className="mr-4">Write a Blog</div>
                            <img
                                src={data?.userName} // Update to use correct property name
                                alt="Profile pic"
                                className="rounded-full max-w-20 h-20" // Adjusted width and added height for a square profile pic
                            />
                            <IoNotifications className="ml-4" />
                        </div>
                    ) : (
                        <div>Login</div>
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
                    setIsAuthenticated(userData.isAuthenticated);
                    setdata(userData);
                } else {
                    setIsAuthenticated(false);
                    setdata(null);
                }
            } catch (error) {
                console.error("Error checking authentication status:", error);
                setIsAuthenticated(false);
                setdata(null);
            }
        };

        checkAuthStatus();
    }, []);

    return <>{<Nav />}</>; // Removed unnecessary curly braces
}

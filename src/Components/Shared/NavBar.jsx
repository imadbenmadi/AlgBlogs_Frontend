import React from 'react'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { useEffect } from 'react';
export default function NavBar() {
    
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setdata] = useState(false);
    function Nav(isAuthenticated) {
        return (
            <div className=' bg-red-600'>
                <img src="http://localhost:3000/Logo.png" alt="Logo" />
                {/* search bar */}
                <div>
                    <CiSearch />
                    <input type="text" />
                </div>
                <div>
                    {isAuthenticated ? (
                        <div>
                            <div>Write a Blog</div>
                            <img src={data.UserName} alt="Profile pic"></img>
                            <IoNotifications />
                        </div>
                    ) : (
                        <div>Login</div>
                    )}
                </div>
            </div>);
  }
  useEffect(() => {
       const checkAuthStatus = async () => {
           try {
               const response = await fetch("http://localhost:3000/authStatus"); // Adjust the URL based on your server configuration

               // Check if the response is successful (status code 200)
               if (response.ok) {
                   const data = await response.json();
                   setdata(data)
                   setIsAuthenticated(data.isAuthenticated);
               } else {
                   // Handle non-successful response (e.g., status code 404, 500)
                   setIsAuthenticated(false);
               }
           } catch (error) {
               console.error("Error checking authentication status:", error);
               setIsAuthenticated(false);
           }
       };

       checkAuthStatus();
  }, []);
    return (
        <>
            sd
            {<Nav isAuthenticated={isAuthenticated} />};
        </>
    );
}

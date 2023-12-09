import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const AuthContext = createContext();

const Main = () => {
    const [isAuthenticated, SetIsAuthenticated] = useState(false);
    const [UserData, SetUserData] = useState(null);

    return (
        <React.StrictMode>
            <AuthContext.Provider
                value={{
                    isAuthenticated,
                    UserData,
                    SetIsAuthenticated,
                    SetUserData,
                }}
            >
                <App />
            </AuthContext.Provider>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);

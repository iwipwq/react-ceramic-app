import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Clayful from "clayful/client-js";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [isAuth,setIsAuth] = useState(false);
    
        //클레이풀 고객로그인여부 확인 API
    const isAuthenticated = () => {    
        var Customer = Clayful.Customer;

        var options = {
            customer : localStorage.removeItem("accessToken")
        };

        Customer.isAuthenticated(options, function(err, result) {

            if (err) {
                // Error case
                console.log(err.code);
                setIsAuth(false);
                return;
            }

            var headers = result.headers;
            var data = result.data;

            if (isAuthenticated) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }

            console.log(data);

        });

    }

    const signOut = () => {
        setIsAuth(false);
        localStorage.removeItem("accessToken");
        navigate("/login");
    }

    const AuthContextData = {
        isAuth,
        isAuthenticated,
        signOut,
    }

    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
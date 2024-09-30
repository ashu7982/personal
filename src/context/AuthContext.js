// import { createContext, useState } from "react"
// import { useNavigate } from "react-router-dom";




// export const AuthContext = createContext();
// export const AuthProvider = ({children}) => {

//     const navigate = useNavigate();

//     const [auth,setAuth] = useState({
//         isAuthenticated: false,
//         user: null
//     })

//   const login = (userName, password) => {
//     console.log(userName,password)
            
//     if(userName == "ashutosh" && password == "password"){
//         setAuth({
//             isAuthenticated: true,
//             user: {userName}
//         })
//         console.log('ddone')
//         navigate("/dashboard");
//     }
//     else{
//         console.log("invalid credentials")
//     }
//   }

//   const logout = () => {
//     setAuth({
//         isAuthenticated: false,
//         user: null
//     })
//     navigate("/")
//   }

//     return (
//         <AuthContext.Provider value={{auth, login, logout}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
  });

  // Login function
  const login = (username, password) => {
    console.log("Login Attempt:", username, password);

    if (username === "Madamjii" && password === "Firstjob") {
      setAuth({
        isAuthenticated: true,
        user: { username },
      });
      console.log("Login Successful");
      navigate("/dashboard");
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials. Please try again.");
    }
  };

  // Logout function
  const logout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
    });
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

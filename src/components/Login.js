// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

// const Login = () => {
//     const {login} = useContext(AuthContext);
//     const [credentials,setCredentials] = useState({
//         userName:"",
//         password:""
//     })
//     const handleChange = (e) => {
//         setCredentials({...credentials, [e.target.name]: e.target.value })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         login(credentials.userName, credentials.password);
//     }


//     return (
        
        
        
//        <form onSubmit={handleSubmit}>

//        <div>
//         <label> userName:</label>
//         <input
//         type="text"
//         name="userName"
//         value={credentials.userName}
//         onChange={handleChange}
//         required
//         />
//        </div>
//        <div>
//         <label> password:</label>
//         <input
//         type="text"
//         name="password"
//         value={credentials.password}
//         onChange={handleChange}
//         required
//         />
//        </div>
//        <button type="submit">Login</button>
//        </form>
        
        
        
        
//     );
//   };
  
//   export default Login;

import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Layout from "./Layout";
import { motion } from "framer-motion"; // Optional: Remove if not using animations
import "../Login.css"; // Ensure you have the styling in place

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    userName: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials.userName, credentials.password);
  };

  return (
    // <Layout>
      <div className="login-container">
        <motion.form
          className="login-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="form-title">Login</h2>

          <motion.div
            className="form-group"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={credentials.userName}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />
          </motion.div>

          <motion.div
            className="form-group"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="login-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </motion.form>
      </div>
    // </Layout>
  );
};

export default Login;

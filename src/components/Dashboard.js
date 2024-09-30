// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import Layout from "./Layout";

// const Dashboard = () => {
//     const {logout} = useContext(AuthContext)
//     return (
//         <>
//         <Layout/>
//         <h1>Dashboard Page</h1>
//         <button onClick={logout}>Logout</button>
//         </>

//     );
//   };
  
//   export default Dashboard;

import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Layout from "./Layout";
import { motion } from "framer-motion";
import "../Dashboard.css"; // Ensure you have the styling in place

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Layout>
      <div className="dashboard-container">
        <motion.h1
          className="dashboard-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Your Dashboard, Bantu!
        </motion.h1>

        <motion.p
          className="dashboard-love-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I love you, Jaan, <br /> bht saara 💖
        </motion.p>

        <motion.button
          className="logout-button"
          onClick={logout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </motion.button>

        <motion.img
          src="https://cdn.pixabay.com/photo/2017/08/30/07/54/heart-2697159_1280.png"
          alt="Heart"
          className="dashboard-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;

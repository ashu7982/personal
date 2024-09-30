// import Layout from "./Layout";

// const Home = () => {
//     return (
//       <>
//        <Layout/>
//       <h1>Home Page</h1>
//       </>
//     )
//   };
  
//   export default Home;


// Home.js
import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";
import "../Home.css"; // Make sure to create this CSS file

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <motion.h1
          className="title"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          Congratulations on Your First Job!
        </motion.h1>

        <motion.p
          className="message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          My Love,
          <br />
          Congratulations sabse pehle to, or ab to party jaanu, uuuummmhaaaaaaaa, I love you bht saara, ab to khush rehna beta, bina kisi tension ke. Wishing you all the success and happiness!
          <br />
          With all my love,
          <br />
          sachin
        </motion.p>

        <motion.img
          src="https://cdn.pixabay.com/photo/2017/01/31/13/14/congratulations-2022178_1280.png"
          alt="Congratulations"
          className="congrats-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </div>
    </Layout>
  );
};

export default Home;

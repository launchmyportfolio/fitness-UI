import React from "react";
import { motion } from "framer-motion";
import Background from "../components/Background";
import "../styles/home.css";


const Home = () => {
  return (
    <>
      <Background blur={false} light={true} />

      <div className="home-container">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Yathish <span>Fitness</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Transform Your Body. Transform Your Life.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="/register" className="btn-primary">Join Now</a>
          <a href="/admin" className="btn-outline">Trainer Login</a>
        </motion.div>

      </div>
    </>
  );
};

export default Home;

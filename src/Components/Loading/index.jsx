import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "15rem",
  height: "15rem",
  display: "flex",
  justifyContent: "space-around",
  marginLeft: "37rem",
  marginTop: "20rem"
};



const loadingCircle = {
  display: "block",
  width: "2rem",
  height: "2rem",
  backgroundColor: "#3A36DB",
  borderRadius: "0.7rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};
const loadingCircleTransition = {
  duration : 0.4,
  yoyo : Infinity,
  ease: 'easeInOut'
}

export const Loader = () => {
  return (
        <div >
        
            <main>
                <h1>Loading</h1>
            </main>

            
        <div>
       
        <motion.div
        style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};



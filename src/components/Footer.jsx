import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <motion.div
      className="text-center text-lg sm:text-xl font-medium pt-10  w-full"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      Made with love by Adnan Hussain © 2022
    </motion.div>
  );
};

export default Footer;

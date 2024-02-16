import { Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";
import "./AvatarImage.css";

const AvatarImage = () => {
  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }} // Example transition delay
      >
        <Avatar
          className="avatar mb-60"
          style={{ width: "300px", height: "300px" }}
          isBordered
          radius="sm"
          src="https://i.pinimg.com/originals/5b/e0/a1/5be0a1b5a6a50d8fdc91df74ba19e741.jpg"
        />
      </motion.div>
    </>
  );
};
export { AvatarImage };

import { BsCheck2 } from "react-icons/bs";
import { Container } from "./Spinner.Styled";
import { motion } from "framer-motion";

const Spinner = ({ check }) => {
  return (
    <Container>
      {check ? (
        <div className="icon">
          <BsCheck2 />
        </div>
      ) : (
        <motion.div
          className="box"
          animate={{ rotate: "360deg" }}
          transition={{ repeat: Infinity, repeatDelay: 0, duration: 0.5 }}
        ></motion.div>
      )}
    </Container>
  );
};

export default Spinner;

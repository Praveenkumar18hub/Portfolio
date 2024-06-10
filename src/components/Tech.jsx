import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../style";

const Tech = () => {
  return (
    <div>
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Tech Knowledge
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
      </motion.div>
      <br></br>
      <br></br>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
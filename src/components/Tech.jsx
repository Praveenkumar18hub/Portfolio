import { Link } from 'react-router-dom';
import React from 'react';
import {  FaPython, FaHtml5, FaReact, FaCss3Alt, FaJsSquare, FaNodeJs, FaNode } from 'react-icons/fa';
import {  SiAppium, SiGit, SiMysql, SiMongodb, SiPostman } from 'react-icons/si';
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../style";
import { motion } from "framer-motion";
import { EvervaultCard, Icon } from './Evervaultcard.jsx';

const Tech = () => {
    return (
        <div className="mx-auto max-w-5xl px-8 pb-8">
            <motion.div variants={textVariant()}>
              <p className={`${styles.sectionSubText} `}>Things I Can Do </p>
              <h2 className={`${styles.sectionHeadText}`}>Skills </h2>
      </motion.div>
            <div className={'grid grid-cols-1 xs:grid-cols-2 gap-8  py-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-center items-center'}>
                {skills.map((item, idx) => (
                    <Link
                        key={idx}
                        className="relative mx-auto flex h-[12rem] w-full max-w-full flex-col items-start border p-3 dark:border-[#13c8c6]/[0.2]"
                    >
                        <Icon className="absolute -left-3 -top-3 size-6  text-white" />
                        <Icon className="absolute -bottom-3 -left-3 size-6 text-white" />
                        <Icon className="absolute -right-3 -top-3 size-6 text-[white]  " />
                        <Icon className="absolute -bottom-3 -right-3 size-6 text-[#ffffff]  " />

                        <EvervaultCard text={item.title} icon={item.icon} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

const skills = [
    {
        title: 'Python',
        icon: <FaPython />
    },
    {
        title: 'HTML',
        icon: <FaHtml5 />
    },
    {
        title: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        title: 'JS',
        icon: <FaJsSquare />
    },
    {
        title: 'React.js',
        icon: <FaReact />
    },
    {
        title: 'Node.js',
        icon: <FaNode/>
    }, 
    {
        title: 'Express',
        icon: <FaNodeJs />
    },
    {
        title: 'Mongo Db',
        icon: <SiMongodb/>
    },
    {
        title: 'SQL',
        icon: <SiMysql />
    },
    {
        title: 'Postman',
        icon: <SiPostman />
    },
    {
        title: 'Appium',
        icon: <SiAppium />
    },
    {
        title: 'Git',
        icon: <SiGit />
    },
];

export default SectionWrapper(Tech, "");


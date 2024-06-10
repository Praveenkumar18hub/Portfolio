import { motion } from "framer-motion";
import { styles } from "../style";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";


const Hero = () => {
  return (

    <section className={` relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row  justify-end gap-5`}
      >
        <div >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#13c8c6]'>Praveen Kumar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          A Tech enthusiast driven by an eagerness for <br className='sm:block hidden' />
          knowledge and growth.
          </p>
          <br></br>
          <br></br>
          <div className={`relative mx-4 flex text-5xl cursor-pointer `}>
              <a href="mailto:praveen181201@gmail.com">
                  <FaEnvelope className="mx-7 text-white hover:text-[#13c8c6] sm:block hidden" />
                </a>
                <a href="https://www.linkedin.com/in/praveenkumar18/">
                  <FaLinkedin className="mx-7  text-white hover:text-[#13c8c6]" />
                </a>
                <a href="https://github.com/Praveenkumar18hub" className="cursor-pointer ">
                  <FaGithub className="mx-7 text-white hover:text-[#13c8c6] " />
                </a>
                
                <a href="https://www.instagram.com/_praveen__18_">
                  <FaInstagram className="mx-7  text-white hover:text-[#13c8c6] sm:block hidden" />
                </a>
                <a href="https://wa.me/919600224398">
                  <FaWhatsapp className="mx-7 text-white hover:text-[#13c8c6] " />
                </a>
        </div>
        </div>
        
      </div> 
     
      <div className='absolute xs:bottom-20 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[40px] h-[64px] rounded-3xl border-4 border-[#13c8c6] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#13c8c6] mb-1'
            />
          </div>
        </a>
      </div>
     
    </section>
    
  );
};

export default Hero;
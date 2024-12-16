import { motion } from "framer-motion";

import { styles } from "../styles";
import { logo } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen m-auto`}>
      <div
        className={`absolute inset-0 top-[120px] text-center flex flex-col justify-center items-center max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <img src={logo} alt="" className="w-96 rounded-full" />
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Himalaya</span> Singh
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full Stack <br className='sm:block hidden' />
            Developer.
          </p>
        </div>
      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

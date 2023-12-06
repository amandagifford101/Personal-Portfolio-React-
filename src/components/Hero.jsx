import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex
      flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'></div>
        <div className='w-5 h-5 rounded-full bg-[#e7dfdd]' />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
        <div>
          <h1 className={`${styles.heroHeadText} text-[#c63999]`}>Hi, I'm <span className='text-[#0ee1f1]'>Amanda</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#e7dfdd]`}>I develop the best applications.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero

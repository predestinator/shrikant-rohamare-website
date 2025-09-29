'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, TrendingUp, Award, ChevronDown } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

const ImmersiveHero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      setMousePosition({
        x: (clientX - centerX) * 0.01,
        y: (clientY - centerY) * 0.01,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section 
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sage-400/20 to-bronze-400/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-bronze-400/20 to-sage-400/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ y: y1, opacity }}
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Expertise Tag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
          >
            <Sparkles className="text-sage-400 mr-2" size={16} />
            <span className="text-cream-100 font-clean font-medium tracking-wide text-sm sm:text-base">Hospitality Business Transformation Expert</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-light text-cream-50 mb-4 sm:mb-6 leading-none tracking-tight"
          >
            <span className="block font-elegant italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream-100 mb-2">Shrikant</span>
            <span className="block bg-gradient-to-r from-sage-400 via-sage-300 to-bronze-400 bg-clip-text text-transparent font-display font-bold">
              ROHAMARE
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-cream-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-clean px-4"
          >
            <em className="font-elegant text-cream-100">Transforming hospitality businesses through strategic innovation,</em><br className="hidden sm:block"/>
            <span className="font-clean font-medium text-cream-200">operational excellence</span>, and <em className="font-elegant text-cream-100">data-driven growth strategies</em>.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16 mb-8 sm:mb-16 px-4"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-clean font-light text-sage-400 mb-2">12+</div>
              <div className="text-cream-300 text-xs sm:text-sm uppercase tracking-widest font-clean font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-clean font-light text-bronze-400 mb-2">$2M+</div>
              <div className="text-cream-300 text-xs sm:text-sm uppercase tracking-widest font-clean font-medium">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-clean font-light text-sage-400 mb-2">25%</div>
              <div className="text-cream-300 text-xs sm:text-sm uppercase tracking-widest font-clean font-medium">Average Growth</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          >
            <motion.button
              onClick={scrollToNext}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-sage-600 to-sage-500 text-cream-50 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-clean font-semibold text-base sm:text-lg shadow-2xl w-full sm:w-auto"
            >
              <span className="relative z-10 tracking-wide">Discover My Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sage-500 to-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button
              onClick={scrollToNext}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-cream-300/40 text-cream-100 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-clean font-semibold text-base sm:text-lg backdrop-blur-md hover:bg-cream-100/10 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="tracking-wide">View Portfolio</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Professional Image - Desktop Only */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/3 h-2/3 hidden xl:block"
        style={{ y: y2 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src="/shrikant-rohamare.png"
            alt="Shrikant Rohamare"
            className="w-full h-full object-cover object-top opacity-80"
            loading="eager"
          />
          
          {/* Floating Achievement Badges - Desktop Only */}
          <motion.div
            className="absolute top-1/3 -left-24 bg-charcoal-800/90 backdrop-blur-md border border-sage-400/30 rounded-2xl p-4 z-20 hidden 2xl:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <TrendingUp className="text-sage-400 mb-2" size={24} />
            <div className="text-cream-100 font-clean font-semibold text-sm">Revenue Growth</div>
            <div className="text-cream-300 text-xs font-clean">25% Average Increase</div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/4 -left-20 bg-charcoal-800/90 backdrop-blur-md border border-bronze-400/30 rounded-2xl p-4 z-20 hidden 2xl:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Award className="text-bronze-400 mb-2" size={24} />
            <div className="text-cream-100 font-clean font-semibold text-sm">Industry Leader</div>
            <div className="text-cream-300 text-xs font-clean">True Key Hotels</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center text-cream-400 hover:text-cream-100 transition-colors duration-300">
          <span className="text-xs sm:text-sm mb-2 uppercase tracking-widest font-clean font-medium">Scroll to explore</span>
          <ChevronDown size={20} />
        </div>
      </motion.div>

      {/* Side Navigation Dots - Desktop Only */}
      <div className="fixed right-6 sm:right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-3 h-3 rounded-full bg-sage-400 shadow-lg"
          aria-label="Scroll to top"
        />
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="w-3 h-3 rounded-full bg-cream-300/40 hover:bg-cream-300/80 transition-colors duration-300"
          aria-label="Scroll to next section"
        />
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
          className="w-3 h-3 rounded-full bg-cream-300/40 hover:bg-cream-300/80 transition-colors duration-300"
          aria-label="Scroll to explore section"
        />
      </div>
    </section>
  )
}

export default ImmersiveHero
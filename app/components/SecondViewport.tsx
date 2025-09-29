'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, CheckCircle2, Globe, Building2, Users, Target, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const SecondViewport = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])

  const { ref: inViewRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      ref={ref}
      className="relative min-h-screen w-full bg-gradient-to-br from-cream-50 via-cream-100 to-sage-50 overflow-hidden py-12 sm:py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage-100/50 to-transparent"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(125,138,107,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,145,72,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8" ref={inViewRef}>
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="inline-flex items-center bg-sage-100 text-sage-800 rounded-full px-4 sm:px-6 py-2 sm:py-3"
                >
                  <Briefcase className="mr-2" size={18} />
                  <span className="font-clean font-semibold tracking-wide text-sm sm:text-base">Director of Sales Operations</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light text-charcoal-900 leading-tight"
                >
                  <span className="font-clean">Driving Excellence in</span>
                  <span className="block bg-gradient-to-r from-sage-600 to-bronze-500 bg-clip-text text-transparent font-display font-bold">
                    Hospitality
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-lg sm:text-xl text-charcoal-700 leading-relaxed max-w-2xl font-clean"
                >
                  From <em className="font-elegant">strategic revenue optimization</em> to <strong className="font-clean font-semibold">operational transformation</strong>, 
                  I help hospitality businesses unlock their full potential through 
                  <em className="font-elegant">data-driven insights</em> and <strong className="font-clean font-semibold">proven methodologies</strong>.
                </motion.p>
              </div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="space-y-3 sm:space-y-4"
              >
                {[
                  "Strategic Sales Operations Leadership",
                  "Revenue Management & Optimization", 
                  "Cross-Cultural Team Development",
                  "Operational Excellence Implementation"
                ].map((item, index) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -20 }} 
                    animate={isInView ? { opacity: 1, x: 0 } : {}} 
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }} 
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="text-sage-500 flex-shrink-0" size={18} />
                    <span className="text-charcoal-700 font-clean font-medium text-sm sm:text-base">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <button 
                  onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
                  className="group bg-charcoal-900 text-cream-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-clean font-semibold text-base sm:text-lg shadow-xl hover:bg-charcoal-800 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Explore My Expertise</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </button>
              </motion.div>
            </div>

            {/* Right Content - Stat Cards */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} 
                transition={{ delay: 0.8, duration: 0.6 }} 
                className="group relative bg-white/80 backdrop-blur-sm border border-cream-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 to-bronze-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="bg-charcoal-900 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-sage-600 transition-colors duration-300">
                    <Globe className="text-cream-50" size={20} />
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-sage-600 mb-2">3 Countries</div>
                  <h3 className="text-base sm:text-lg font-clean font-bold text-charcoal-900 mb-2">Global Experience</h3>
                  <p className="text-charcoal-700 text-xs sm:text-sm leading-relaxed font-clean">12+ years across Canada, India, and the UK</p>
                </div>
                <div className="absolute inset-0 border-2 border-sage-400/0 group-hover:border-sage-400/30 rounded-2xl transition-all duration-300" />
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} 
                transition={{ delay: 0.9, duration: 0.6 }} 
                className="group relative bg-white/80 backdrop-blur-sm border border-cream-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bronze-50/50 to-sage-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="bg-charcoal-900 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-bronze-600 transition-colors duration-300">
                    <Building2 className="text-cream-50" size={20} />
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-bronze-600 mb-2">4+ Major Brands</div>
                  <h3 className="text-base sm:text-lg font-clean font-bold text-charcoal-900 mb-2">Industry Leadership</h3>
                  <p className="text-charcoal-700 text-xs sm:text-sm leading-relaxed font-clean">Leading roles at Marriott, Wyndham, IHG, True Key Hotels</p>
                </div>
                <div className="absolute inset-0 border-2 border-bronze-400/0 group-hover:border-bronze-400/30 rounded-2xl transition-all duration-300" />
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} 
                transition={{ delay: 1.0, duration: 0.6 }} 
                className="group relative bg-white/80 backdrop-blur-sm border border-cream-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bronze-50/50 to-sage-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="bg-charcoal-900 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-bronze-600 transition-colors duration-300">
                    <Users className="text-cream-50" size={20} />
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-bronze-600 mb-2">50+ Team Members</div>
                  <h3 className="text-base sm:text-lg font-clean font-bold text-charcoal-900 mb-2">Team Excellence</h3>
                  <p className="text-charcoal-700 text-xs sm:text-sm leading-relaxed font-clean">Built and led high-performing teams of 50+ professionals</p>
                </div>
                <div className="absolute inset-0 border-2 border-bronze-400/0 group-hover:border-bronze-400/30 rounded-2xl transition-all duration-300" />
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} 
                transition={{ delay: 1.1, duration: 0.6 }} 
                className="group relative bg-white/80 backdrop-blur-sm border border-cream-200 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 to-bronze-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="bg-charcoal-900 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-sage-600 transition-colors duration-300">
                    <Target className="text-cream-50" size={20} />
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-sage-600 mb-2">$2M+ Generated</div>
                  <h3 className="text-base sm:text-lg font-clean font-bold text-charcoal-900 mb-2">Proven Results</h3>
                  <p className="text-charcoal-700 text-xs sm:text-sm leading-relaxed font-clean">Consistently delivered 25% revenue growth year over year</p>
                </div>
                <div className="absolute inset-0 border-2 border-sage-400/0 group-hover:border-sage-400/30 rounded-2xl transition-all duration-300" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 0.8 }}
        onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center text-charcoal-600 hover:text-charcoal-900 transition-colors duration-300">
          <span className="text-xs sm:text-sm mb-2 uppercase tracking-wider font-clean font-medium">Continue exploring</span>
          <div className="w-6 h-10 border-2 border-charcoal-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-charcoal-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default SecondViewport
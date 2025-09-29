'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Home, 
  User, 
  Briefcase, 
  Target, 
  Star, 
  Mail,
  ChevronUp
} from 'lucide-react'

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { id: 'about', label: 'About', icon: User, action: () => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' }) },
    { id: 'experience', label: 'Experience', icon: Briefcase, action: () => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' }) },
    { id: 'services', label: 'Services', icon: Target, action: () => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' }) },
    { id: 'testimonials', label: 'Reviews', icon: Star, action: () => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' }) },
    { id: 'contact', label: 'Contact', icon: Mail, action: () => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' }) },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show navigation after scrolling past first section
      setIsVisible(scrollY > windowHeight * 0.5)
      
      // Update active section based on scroll position
      if (scrollY < windowHeight * 0.5) {
        setActiveSection('hero')
      } else if (scrollY < windowHeight * 1.5) {
        setActiveSection('about')
      } else {
        setActiveSection('experience')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Bottom Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-charcoal-800/95 backdrop-blur-xl border border-sage-400/30 rounded-3xl px-4 sm:px-6 py-3 sm:py-4 shadow-2xl">
              <div className="flex items-center space-x-1 sm:space-x-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={item.action}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-2 sm:p-3 rounded-xl transition-all duration-300 group ${
                      activeSection === item.id 
                        ? 'bg-sage-600 text-cream-50 shadow-lg' 
                        : 'text-cream-300 hover:text-cream-50 hover:bg-charcoal-700/50'
                    }`}
                  >
                    <item.icon size={18} />
                    
                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      whileHover={{ opacity: 1, y: -10, scale: 1 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-charcoal-900 text-cream-50 text-xs font-clean font-medium rounded-lg whitespace-nowrap pointer-events-none"
                    >
                      {item.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-charcoal-900" />
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-sage-600 text-cream-50 p-3 sm:p-4 rounded-full shadow-xl hover:bg-sage-500 transition-all duration-300 group"
          >
            <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default BottomNavigation
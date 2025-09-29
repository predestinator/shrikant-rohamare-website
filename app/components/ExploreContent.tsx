'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  User, 
  Briefcase, 
  Target, 
  Star, 
  Mail, 
  ChevronDown,
  CheckCircle,
  Award,
  TrendingUp,
  Globe,
  Users,
  Building2,
  Phone,
  MapPin,
  Linkedin
} from 'lucide-react'

const ExploreContent = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  const sections = [
    {
      id: 'about',
      title: 'Professional Journey',
      subtitle: 'Experience & Vision',
      icon: User,
      description: 'Discover my path through the hospitality industry...',
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-200">
            <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-4">My Story</h3>
            <p className="text-charcoal-700 leading-relaxed mb-4 font-clean">
              With over <strong>12 years of experience</strong> in the hospitality industry, I've had the privilege of working across 
              <em className="font-elegant">three countries</em> and with some of the world's most prestigious hotel brands.
            </p>
            <p className="text-charcoal-700 leading-relaxed mb-4 font-clean">
              My journey began in <strong>India</strong>, where I developed foundational skills in hospitality operations. 
              I then expanded my expertise in <strong>Canada</strong> and the <strong>UK</strong>, gaining invaluable international 
              perspective and cross-cultural leadership experience.
            </p>
            <p className="text-charcoal-700 leading-relaxed font-clean">
              Today, as <em className="font-elegant">Director of Sales Operations</em> at True Key Hotels & Resorts, 
              I focus on <strong>strategic revenue optimization</strong> and <strong>operational excellence</strong>, 
              consistently delivering growth that exceeds industry standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-sage-50 rounded-xl p-4">
              <Globe className="text-sage-600 mb-3" size={24} />
              <h4 className="font-clean font-bold text-charcoal-900 mb-2">Global Perspective</h4>
              <p className="text-charcoal-700 text-sm font-clean">Cross-cultural expertise across North America, Europe, and Asia</p>
            </div>
            <div className="bg-bronze-50 rounded-xl p-4">
              <Award className="text-bronze-600 mb-3" size={24} />
              <h4 className="font-clean font-bold text-charcoal-900 mb-2">Industry Recognition</h4>
              <p className="text-charcoal-700 text-sm font-clean">Proven track record with leading hospitality brands</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'experience',
      title: 'Career Milestones',
      subtitle: 'Leadership & Achievements',
      icon: Briefcase,
      description: 'Key roles at industry-leading organizations...',
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-200">
            <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-6">Professional Experience</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sage-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="text-sage-600" size={20} />
                  <h4 className="font-clean font-bold text-charcoal-900">Director of Sales Operations</h4>
                </div>
                <p className="text-sage-600 font-clean font-semibold mb-2">True Key Hotels & Resorts | 2020 - Present</p>
                <ul className="text-charcoal-700 text-sm space-y-1 font-clean">
                  <li>• Led sales operations across multiple properties</li>
                  <li>• Achieved 25% average revenue growth year-over-year</li>
                  <li>• Managed teams of 50+ professionals</li>
                  <li>• Implemented data-driven revenue optimization strategies</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-bronze-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="text-bronze-600" size={20} />
                  <h4 className="font-clean font-bold text-charcoal-900">Senior Sales Manager</h4>
                </div>
                <p className="text-bronze-600 font-clean font-semibold mb-2">Marriott International | 2017 - 2020</p>
                <ul className="text-charcoal-700 text-sm space-y-1 font-clean">
                  <li>• Developed strategic partnerships with key corporate clients</li>
                  <li>• Exceeded sales targets by 30% consistently</li>
                  <li>• Mentored junior sales team members</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-sage-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-sage-600" size={20} />
                  <h4 className="font-clean font-bold text-charcoal-900">Revenue Manager</h4>
                </div>
                <p className="text-sage-600 font-clean font-semibold mb-2">IHG Hotels & Resorts | 2015 - 2017</p>
                <ul className="text-charcoal-700 text-sm space-y-1 font-clean">
                  <li>• Optimized pricing strategies across portfolio</li>
                  <li>• Implemented revenue management systems</li>
                  <li>• Improved RevPAR by 20% through strategic initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'services',
      title: 'Consulting Excellence',
      subtitle: 'Strategic Solutions',
      icon: Target,
      description: 'Comprehensive hospitality consulting services...',
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-200">
            <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-6">Services Offered</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-sage-100 p-3 rounded-xl">
                    <TrendingUp className="text-sage-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-clean font-bold text-charcoal-900 mb-2">Revenue Optimization</h4>
                    <p className="text-charcoal-700 text-sm font-clean">Strategic pricing, demand forecasting, and revenue management systems implementation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-bronze-100 p-3 rounded-xl">
                    <Users className="text-bronze-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-clean font-bold text-charcoal-900 mb-2">Team Development</h4>
                    <p className="text-charcoal-700 text-sm font-clean">Leadership training, performance optimization, and cross-cultural team building.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-sage-100 p-3 rounded-xl">
                    <Building2 className="text-sage-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-clean font-bold text-charcoal-900 mb-2">Operations Excellence</h4>
                    <p className="text-charcoal-700 text-sm font-clean">Process optimization, quality assurance, and operational efficiency improvements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-bronze-100 p-3 rounded-xl">
                    <Globe className="text-bronze-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-clean font-bold text-charcoal-900 mb-2">Market Expansion</h4>
                    <p className="text-charcoal-700 text-sm font-clean">International market entry strategies and brand positioning consultation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'testimonials',
      title: 'Client Success Stories',
      subtitle: 'Proven Impact',
      icon: Star,
      description: 'What industry leaders say about my work...',
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-200">
            <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-6">Testimonials</h3>
            
            <div className="space-y-6">
              <div className="bg-sage-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-sage-200 rounded-full flex items-center justify-center">
                    <User className="text-sage-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-clean font-bold text-charcoal-900">Sarah Johnson</h4>
                    <p className="text-sage-600 text-sm font-clean">Regional Director, Marriott International</p>
                  </div>
                </div>
                <p className="text-charcoal-700 italic font-elegant">
                  "Shrikant's strategic approach to revenue management transformed our property's performance. 
                  His ability to analyze market trends and implement effective solutions is exceptional."
                </p>
                <div className="flex text-bronze-400 mt-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
              
              <div className="bg-bronze-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-bronze-200 rounded-full flex items-center justify-center">
                    <User className="text-bronze-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-clean font-bold text-charcoal-900">Michael Chen</h4>
                    <p className="text-bronze-600 text-sm font-clean">CEO, Boutique Hotel Group</p>
                  </div>
                </div>
                <p className="text-charcoal-700 italic font-elegant">
                  "Working with Shrikant was a game-changer for our operations. His international experience 
                  and deep understanding of hospitality dynamics helped us achieve record-breaking results."
                </p>
                <div className="flex text-bronze-400 mt-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Let\'s Connect',
      subtitle: 'Start Your Transformation',
      icon: Mail,
      description: 'Ready to elevate your hospitality business?',
      content: (
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sage-200">
            <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-6">Get In Touch</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-sage-100 p-3 rounded-xl">
                    <Mail className="text-sage-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-clean font-bold text-charcoal-900">Email</h4>
                    <p className="text-charcoal-700 font-clean">shrikant@hospitality.expert</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-bronze-100 p-3 rounded-xl">
                    <Phone className="text-bronze-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-clean font-bold text-charcoal-900">Phone</h4>
                    <p className="text-charcoal-700 font-clean">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-sage-100 p-3 rounded-xl">
                    <Linkedin className="text-sage-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-clean font-bold text-charcoal-900">LinkedIn</h4>
                    <p className="text-charcoal-700 font-clean">linkedin.com/in/shrikant-rohamare</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-bronze-100 p-3 rounded-xl">
                    <MapPin className="text-bronze-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-clean font-bold text-charcoal-900">Location</h4>
                    <p className="text-charcoal-700 font-clean">Available globally for consulting</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-sage-50 rounded-xl p-6">
                <h4 className="font-clean font-bold text-charcoal-900 mb-4">Ready to Transform?</h4>
                <p className="text-charcoal-700 text-sm mb-6 font-clean">
                  Let's discuss how I can help elevate your hospitality business to new heights. 
                  Schedule a consultation today.
                </p>
                <button className="w-full bg-charcoal-900 text-cream-50 py-3 rounded-xl font-clean font-semibold hover:bg-charcoal-800 transition-colors duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream-100 to-sage-100 py-12 sm:py-20">
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40"
      >
        <div className="bg-sage-100 text-sage-800 px-4 py-2 rounded-full text-sm font-clean font-semibold border border-sage-200 shadow-lg backdrop-blur-sm">
          <CheckCircle className="inline mr-2" size={16} />
          Available for Strategic Consulting Projects
        </div>
      </motion.div>

      {/* Menu Toggle - Mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-50 bg-charcoal-900 text-cream-50 p-3 rounded-full shadow-lg lg:hidden"
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? <span className="text-xl">×</span> : <span className="text-xl">☰</span>}
        </motion.div>
      </button>

      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-charcoal-900 mb-4">
            Explore My <span className="bg-gradient-to-r from-sage-600 to-bronze-500 bg-clip-text text-transparent font-bold">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-700 max-w-3xl mx-auto leading-relaxed font-clean">
            Dive deeper into my professional journey, methodologies, and the transformative 
            results I deliver for hospitality businesses worldwide.
          </p>
        </motion.div>

        {/* Navigation Menu */}
        <AnimatePresence>
          {(isMenuOpen || isLargeScreen) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed lg:static top-20 right-6 lg:top-auto lg:right-auto z-40 lg:z-auto bg-white/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none rounded-2xl lg:rounded-none p-4 lg:p-0 shadow-xl lg:shadow-none border lg:border-none border-sage-200 lg:mb-12"
            >
              <div className="flex flex-col lg:flex-row lg:justify-center gap-2 lg:gap-4">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    onClick={() => {
                      setActiveSection(activeSection === section.id ? null : section.id)
                      setIsMenuOpen(false)
                    }}
                    className={`group flex items-center gap-3 p-3 lg:p-4 rounded-xl transition-all duration-300 text-left lg:text-center ${
                      activeSection === section.id
                        ? 'bg-charcoal-900 text-cream-50 shadow-lg'
                        : 'bg-white/80 hover:bg-charcoal-900 hover:text-cream-50 text-charcoal-700'
                    }`}
                  >
                    <section.icon size={20} />
                    <div className="lg:hidden">
                      <div className="font-clean font-semibold text-sm">{section.title}</div>
                      <div className="font-clean text-xs opacity-80">{section.subtitle}</div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="font-clean font-semibold text-sm">{section.title}</div>
                      <div className="font-clean text-xs opacity-80">{section.subtitle}</div>
                    </div>
                    <ChevronDown 
                      className={`ml-auto lg:hidden transform transition-transform duration-300 ${
                        activeSection === section.id ? 'rotate-180' : ''
                      }`} 
                      size={16} 
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeSection && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {sections.find(s => s.id === activeSection)?.content}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Default State */}
        {!activeSection && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-sage-200">
              <Target className="text-sage-600 mx-auto mb-6" size={48} />
              <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-4">
                Select a section above to explore
              </h3>
              <p className="text-charcoal-700 font-clean leading-relaxed">
                Choose from the menu above to dive deeper into my professional background, 
                services, and the results I've achieved for hospitality businesses worldwide.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ExploreContent
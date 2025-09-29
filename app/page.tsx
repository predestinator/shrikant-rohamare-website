'use client'

import { motion } from 'framer-motion'
import ImmersiveHero from './components/ImmersiveHero'
import SecondViewport from './components/SecondViewport'
import ExploreContent from './components/ExploreContent'
import BottomNavigation from './components/BottomNavigation'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ImmersiveHero />
      <SecondViewport />
      <ExploreContent />
      <BottomNavigation />
    </main>
  )
}
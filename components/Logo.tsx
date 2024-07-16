import { Calculator } from 'lucide-react'
import React from 'react'

export const Logo = () => {
  return (
    <a href="/" className='flex items-center gap-2'>
      <Calculator className='stroke h-11 w-11 stroke-amber-500 stroke-[1.5]'/>
      <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent'>
        Budget Tracke
      </p>
    </a>
  )
}

export const LogoMobile = () => {
  return (
    <a href="/" className='flex items-center gap-2'>
      <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent'>
        Budget Tracker
      </p>
    </a>
  )
}
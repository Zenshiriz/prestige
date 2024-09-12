import React from 'react'
import Reveal from './RevealAnimation'

const Heading = ({className , children}) => {
  return (
    <div className={`${className? className :""} font-bold text-xl capitalize md:text-2xl lg:text-3xl`}>
      {children}
    </div>
  )
}

export default Heading

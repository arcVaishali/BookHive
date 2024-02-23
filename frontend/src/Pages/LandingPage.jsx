import React from 'react'
import Navbar from '../components/Navbar'
import UserFooter from '../components/UserFooter'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Section1/>
        <Section2/>
        <UserFooter/>
    </div>
  )
}

export default LandingPage
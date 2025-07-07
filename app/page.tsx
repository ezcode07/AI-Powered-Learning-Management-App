import React from 'react'
import {Button} from '@/components/ui/button'
import CompanionCards from '@/components/CompanionCards'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionsList'
import { recentSessions } from '@/constants'


const Page = () => {
  return (
    <main>
    <h1 className='text-2xl underline'>Popular Companion</h1>

    <section className='home-section'>
      <CompanionCards 
      id="124"
      name="Nural Network"
      topic="Neural Networks"
      subject="Machine Learning"
      duration={45}
      color="#ffda6e"

      />
      <CompanionCards 
      id="125"
      name="Nural Network"
      topic="Neural Networks"
      subject="Machine Learning"
      duration={50}
      color="#BDE7FF"

      />
      <CompanionCards 
      id="126"
      name="Nural Network"
      topic="Neural Networks"
      subject="Machine Learning"
      duration={35}
      color="#e5d0ff"

      />
    
     

    </section>
    <section className='home-section'>
      <CompanionsList
      title="Recently Completed sessions"
      companions={recentSessions}
      ClassNames="w-2/3 mx-lg:w-full"
      />
      <CTA></CTA>
    </section>

    </main>
   
  )
}

export default Page
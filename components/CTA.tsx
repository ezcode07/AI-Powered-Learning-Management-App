import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'> Start learning your way.</div>
      <h2 className='3xl font-bold'>
        Build and Personalize your own learning path with our AI-powered companions.
      </h2>
      <p>Pick a name, subject,voice & personality - start learning through voice conversation that feel natural and fun</p>
      <Image src="/images/cta.svg" alt="cta image" width={500} height={300} className='w-full h-auto' />
      <button className='btn-primary'>
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
        <Link href={`/companions/new`}>
        <p>Build your New Companion</p>
        </Link>
      </button>
    </section>
  )
}

export default Cta

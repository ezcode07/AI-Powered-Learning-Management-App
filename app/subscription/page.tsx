import React from 'react'
import {PricingTable} from '@clerk/nextjs'

const page = () => {
  return (
    <div className="m-10">
      <h1 className='text-3xl font-bold text-center mb-5'>Subscription Plans</h1>
       <PricingTable />
    </div>
  )
}

export default page

import React from 'react'
import {PricingTable} from '@clerk/nextjs'

const page = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Subscription Plans</h1>
       <PricingTable />
    </div>
  )
}

export default page

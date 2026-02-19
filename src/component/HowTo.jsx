import React from 'react'
import Card from './Card'

const HowTo = () => {
  return (
    <div className='flex lg:flex-row flex-col gap-2 bg-yellow-500 max-w-250 rounded-xl divide-x mx-auto  mt-0'>
      <Card
      number="01."
      topic="Causes"
      paragraph="We support education, healthcare, and poverty reduction."
      link="See Proof"
      />
      <Card
      number="02."
      topic="Get involved"
      paragraph="Volunteer or donate your skills to make a difference."
      link="View Financials"
      />
      <Card
      number="03."
      topic="Donation"
      paragraph="Contribute today and help us change lives and build a better future."
      link="Learn More"
      />
    </div>
  )
}

export default HowTo

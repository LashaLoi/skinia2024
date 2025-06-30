import { redirect } from 'next/navigation'
import { Confetti } from './components/Confetti'

import { RegisteredHero } from '@/app/registered/components/RegisteredHero'

export default function RegisteredPage() {
  return (
    <>
      <Confetti />
      <RegisteredHero />
    </>
  )
}

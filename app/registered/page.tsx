import { Confetti } from './components/Confetti'

import { RegisteredHero } from '@/app/registered/components/RegisteredHero'
import { redirect } from 'next/navigation'

export default function RegisteredPage() {
  redirect('/')

  return (
    <>
      <Confetti />
      <RegisteredHero />
    </>
  )
}

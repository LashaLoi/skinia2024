import Hero from '@/app/components/Hero'
import Content from '@/app/components/Content'
import ContactUs from '@/app/components/ContactUs'
import Footer from '@/app/components/Footer'
import Location from '@/app/components/Location'
import Speakers from '@/app/components/Speakers'
import Feedback from '@/app/components/Feedback'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Content />
      <Speakers />
      <Feedback />
      <Location />
      <ContactUs />
      <Footer />
    </>
  )
}

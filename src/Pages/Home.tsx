import NavigationBar from '../Component/NavigationBar'
import HeroSection from '../Component/HeroText'
import GallerySection from '../Component/HeroImages'
import ProgramsSection from '../Component/ProgramSection'
import LocationSection from '../Component/LocationSection'
import TestimoniesSection from '../Component/Testimony'
import CommunitySection from '../Component/CommunitySection'
import WelcomeSection from '../Component/Wellcome'
import Footer from '../Component/Footer'

function Home() {
  return (
    <>
  <NavigationBar/>
  <HeroSection/>
  <GallerySection/>
  <ProgramsSection />
  <LocationSection/>
  <TestimoniesSection/>
  <CommunitySection/>
  <WelcomeSection/>
  <Footer/>
    </>

  )
}

export default Home
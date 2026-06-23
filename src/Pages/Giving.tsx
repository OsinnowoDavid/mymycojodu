import GivingHero from "../Component/GivingHero"
import GivingHeroText from "../Component/GivingHeroText"
import NavigationBar from "../Component/NavigationBar"
import WelcomeSection from "../Component/Wellcome"


function Giving() {
  return (
    <div>
        <NavigationBar/>
        <GivingHeroText/>
        <GivingHero/>
        <WelcomeSection/>
        <footer/>
    </div>
  )
}

export default Giving
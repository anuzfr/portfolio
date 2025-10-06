import BackgroundBoxesDemo from '../components/BackgroundBoxesDemo.jsx';
import SlidingText from '../components/SlidingText.jsx';
import MySelfSection from '../components/MySelfSection.jsx';
import InfiniteMovingSkills from '../components/InfiniteMovingSkills.jsx'
import Works from '../components/Works.jsx'
import ContactSection from '../components/Contact.jsx'

export default function Home() {
  return (
   
    <div>
    <BackgroundBoxesDemo />    
    <div>
      
      <SlidingText />      
    </div>
    <div>
      <MySelfSection/>
    </div>
    <div>
          <div className='text-7xl font-extrabold mt-5 ml-44 tracking-tight'>
            Skills
          </div>
          <div>
            <InfiniteMovingSkills/>
          </div>
    </div>
    <div>
          <div className='text-7xl font-extrabold mt-5 ml-44 tracking-tight'>
            Projects
          </div>
          <div>
            <Works />
          </div>
    </div>
    <div className='mt-5'>
      <SlidingText />
    </div>
    <div>
          <div>
            <ContactSection/>
          </div>
    </div>
    
   
    
  </div>
);
}

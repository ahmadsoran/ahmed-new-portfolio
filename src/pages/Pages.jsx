import useStore from '../feature/NavFixedSlice';
import About from './about/about';
import Contact from './contact/contact';
import HireSection from './hire/HireSection';
import Home from './home/Home';
import Projects from './projects/Projects';
import Navbar from '../components/Navbar';
function Pages() {

    const isFixed = useStore((state) => state.isFixed)
    return (
        <>

            <Navbar isfixed='fixed top-0 left-0 w-full opacity-0 rounded-b-xl  nv-anim' display={isFixed && ' z-50 animate-nv'} />
            <Navbar isfixed='relative' display={`transition0 ${isFixed ? 'opacity-0' : 'opacity-100'}`} />

            <div className="p-5">
                <Home />
                <About />
            </div>
            <Projects />
            <HireSection />
            <Contact />

        </>
    )
}

export default Pages;
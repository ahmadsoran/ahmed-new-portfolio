import { motion } from 'framer-motion';
import About from './about/about';
import Contact from './contact/contact';
import HireSection from './hire/HireSection';
import Home from './home/Home';
import Projects from './projects/Projects';
function Pages() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <div className="p-5">
                <Home />
                <About />
            </div>
            <Projects />
            <HireSection />
            <Contact />

        </motion.div>
    )
}

export default Pages;
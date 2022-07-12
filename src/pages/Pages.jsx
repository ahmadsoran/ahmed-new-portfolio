import { motion } from 'framer-motion';
import About from './about/about';
import Home from './home/Home';
function Pages() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-5"
        >
            <Home />
            <About />
        </motion.div>
    )
}

export default Pages;
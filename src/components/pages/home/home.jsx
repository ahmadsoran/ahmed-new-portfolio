import { motion } from 'framer-motion';
import Main from './components/Main';
function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-5"
        >
            <Main />
        </motion.div>
    )
}

export default Home
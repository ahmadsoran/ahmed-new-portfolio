import { motion } from 'framer-motion'
function NavMenu(props) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full z-30 backdrop-blur-md fixed top-0 left-0 md:hidden touch-none min-h-screen"
                onClick={props.onClick}
            ></motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 1.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.6 }}
                transition={{ duration: 1 }}
                className="fixed top-0 left-0 h-full w-full backdrop-blur-md z-40 My-Menu md:hidden min-h-screen">
                {
                    props.children
                }
            </motion.div>
        </>
    )
}

export default NavMenu
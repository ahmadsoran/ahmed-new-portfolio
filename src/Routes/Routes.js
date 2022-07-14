import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import PAGE404 from "../components/PAGE404"
import useStore from "../feature/NavFixedSlice"
import About from "../pages/about/about"
import Pages from "../pages/Pages"
function MyRoutes() {
    const locations = useLocation()

    const isFixed = useStore((state) => state.isFixed)
    // if screen width is more than 768px, then navbar is fixed

    return (
        <>
            <Navbar isfixed='fixed top-0 left-0 w-full opacity-0 rounded-b-xl  nv-anim' display={isFixed && ' z-50 animate-nv'} />
            <Navbar isfixed='relative' display={`transition0 ${isFixed ? 'opacity-0' : 'opacity-100'}`} />
            <AnimatePresence exitBeforeEnter >
                <Routes location={locations} key={locations.pathname}>
                    <Route path="/" element={<Pages />} />
                    <Route path="/about" element={<About />} />
                    <Route exact path="*" element={<PAGE404 />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default MyRoutes


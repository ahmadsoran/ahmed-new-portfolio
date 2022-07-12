import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import PAGE404 from "../components/PAGE404"
import About from "../pages/about/about"
import Pages from "../pages/Pages"
function MyRoutes() {
    const locations = useLocation()

    return (
        <>
            <Navbar />
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


import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import PAGE404 from "../components/PAGE404"
import Home from "../components/pages/home/home"
import { AnimatePresence } from "framer-motion"
function MyRoutes() {
    const locations = useLocation()

    return (
        <>
            <Navbar />
            <AnimatePresence exitBeforeEnter >
                <Routes location={locations} key={locations.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Home />} />
                    <Route exact path="*" element={<PAGE404 />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default MyRoutes


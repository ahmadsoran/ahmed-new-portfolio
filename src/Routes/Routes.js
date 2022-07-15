import { Route, Routes } from "react-router-dom"
import PAGE404 from "../components/PAGE404"
import Pages from "../pages/Pages"
import ProjectModal from "../pages/projects/ProjectModal"


function MyRoutes() {
    return (
        <>


            <Routes>
                <Route path="/" element={<Pages />} />
                <Route path="/:id" element={<>
                    <Pages />
                    <ProjectModal />
                </>} />
                <Route exact path="*" element={<PAGE404 />} />
            </Routes>


        </>
    )
}

export default MyRoutes


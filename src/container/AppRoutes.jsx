import { Route, Routes } from "react-router-dom"
import { NotFoundPage } from "../components/pages/NotFoundPage"
import { HomePage } from "../components/pages/HomePage"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes
import {Route, Routes} from "react-router";
import Home from "@/components/Home.jsx";
import App from "@/App.jsx";
import About from "@/pages/About.jsx";
import AuthLayout from "@/pages/layouts/AuthLayout.jsx";
import Login from "@/pages/auth/Login.jsx";
import Register from "@/pages/auth/Register.jsx";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    )
}
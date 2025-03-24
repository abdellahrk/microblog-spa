import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider"
import {BrowserRouter, Route, Router, Routes} from "react-router";
import About from "@/pages/About.jsx";
import AppRouter from "@/utils/routes.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    </StrictMode>
)

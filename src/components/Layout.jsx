import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"

import './Layout.css'

export default function Layout() {
    return (
        <div className="main-container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
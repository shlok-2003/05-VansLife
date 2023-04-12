import React from "react"
import { Link, NavLink } from "react-router-dom"

import './Header.css'

export default function Header() {
    return (
        <header>
            <Link className="site--logo" to="/">#VansLife</Link>

            <nav className="nav--links">
                <NavLink 
                    className={({isActive}) => isActive ? "nav--link nav--link-active" : "nav--link"} 
                    to="/host"
                >
                    Host
                </NavLink>

                <NavLink 
                className={({isActive}) => isActive ? "nav--link nav--link-active" : "nav--link"}
                to="/about"
                >
                    About
                </NavLink>
                
                <NavLink 
                className={({isActive}) => isActive ? "nav--link nav--link-active" : "nav--link"}
                to="/vans"
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}
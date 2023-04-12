import React from "react"
import { Link, NavLink, Outlet } from "react-router-dom"

import './HostLayout.css'

export default function HostLayout() {
    return (
        <>
            <nav className="host--nav">
                <NavLink 
                to="/host"
                end
                className={({isActive}) => isActive ? 'active' : null}
                >
                    Dashboard
                </NavLink>

                <NavLink 
                to="/host/income"
                className={({isActive}) => isActive ? 'active' : null}
                >
                    Income
                </NavLink>

                <NavLink 
                to="/host/reviews"
                className={({isActive}) => isActive ? 'active' : null}
                >
                    Reviews
                </NavLink>
            </nav>

            <Outlet />
        </>
    )
}
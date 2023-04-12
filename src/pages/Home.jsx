import React from "react"
import { Link } from "react-router-dom"

import BgImg from "../assets/images/home-hero.png"
import './Home.css'


export default function Home() {
    return (
        <div className="home--container">
            <img className="home--bg" src={BgImg} alt="bg--image" />

            <div className="home--slate">
                <h1 className="home--text">You got the travel plans, we got the travel vans.</h1>
                <p className="home--paragraph">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make 
                your perfect road trip.</p>

                <button className="home--btn">
                    <Link className="home--btn-link" to="/vans">Find your vans</Link>
                </button>

            </div>
        </div>
    )
}
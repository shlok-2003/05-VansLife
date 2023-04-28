import React from "react"
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import "./HostVans.css"

function HostVansEachElement(props) {
    return (
        <div className="vans--element">
            <img src={props.imageUrl} alt={props.title}/>
            
            <div>
                <h3>{props.title}</h3>
                <h5>{props.price}/day</h5>
            </div>
        </div>
    )
}

export default function HostVans() {
    const [items, setItems] = React.useState([])
    
    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setItems(data.vans))
    }, [])
    
    const HostVansElement = items.map(van => (
        <Link to={`/host/vans/${van.id}`} className="host--vans-link">
            <HostVansEachElement 
                key={nanoid()}
                imageUrl={van.imageUrl}
                title={van.name}
                price={van.price}
            />
        </Link>
    ))
    
    return (
        <div className="host--vans">
            <h1 className="host--vans-text">Your listed vans</h1>
            
            <div className="host--vans-list">
                {
                    items.length > 0 ? 
                    HostVansElement :
                    <h1 className="host-vans-item-loading">Your cart is empty</h1>
                }
            </div>
        </div>
    )
}
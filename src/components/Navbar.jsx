// Navlink 
import { NavLink } from "react-router-dom";

// Navbar 

export default function Navbar() {

    return (
        <nav className="nav-container">
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About us</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
            </ul>
        </nav>
    )
}
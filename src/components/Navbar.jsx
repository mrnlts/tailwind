import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleNavbar = () => {
        setShowNavbar(prev => !prev);
    };

    return (
        <div className="flex items-center px-8">
            <FontAwesomeIcon icon={faBars} className={`text-3xl ${!showNavbar && "text-white"}`} onClick={handleNavbar}/>
            <nav className={"flex w-full justify-around " + (!showNavbar ? "hidden" : "")}>
                <Link to="/" onClick={handleNavbar}>Home</Link>
                <Link to="/signup" onClick={handleNavbar}>Sign up</Link>
                <Link to="/beta" onClick={handleNavbar}>Beta</Link>
            </nav>
        </div>
    )
}
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

    const [active,
        setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">

                    <img
                        src=

                        alt="Logo"
                        width="130"
                        height="35"/>


                <Link
                    onClick={handleClick}
                    active={active}
                    role="button"
                    className={active
                    ? "navbar-burger burger is-active"
                    : "navbar-burger burger"}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>

            <div
                onClick={handleClick}
                active={active}
                className={active
                ? "navbar-menu is-active"
                : "navbar-menu"}>
                <div class="navbar-center">
                    <Link exact to="/"
                        class="navbar-item button is-normal is-light">Home</Link>
                    <Link exact to="/about"
                        class="navbar-item button is-normal is-light">About</Link>

                    <Link exact to="/projects"
                        class="navbar-item button is-normal is-light">Projects</Link>
                    <Link exact to="/contact"
                        class="navbar-item button is-normal is-light">Contact</Link>
                </div>
            </div>
        </nav>

    )

}

export default Navbar;

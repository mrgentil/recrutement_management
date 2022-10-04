import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

const Nav = ({ cmp }) => {
    const location = useLocation();
    return (
        <div className="home-header-container-nav">
            <div className="home-header-container-nav-left">
                <div className="home-header-container-nav-left__branding">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="home-header-container-nav-right">
                <Link
                    className={`${
                        cmp === "home" ? "home-header-container-nav-right--active-menu" : ""
                    }`}
                    to="/"
                >
                    Accueil
                </Link>
                <Link
                    className={`${
                        cmp === "jobs" ? "home-header-container-nav-right--active-menu" : ""
                    }`}
                    to="/jobs"
                >
                    Parcourir les emplois
                </Link>
                <Link
                    className={`${
                        cmp === "blogs"
                            ? "home-header-container-nav-right--active-menu"
                            : ""
                    }`}
                    to="/blogs"
                >
                    Blog
                </Link>
                <Link
                    className={`${
                        cmp === "contact"
                            ? "home-header-container-nav-right--active-menu"
                            : ""
                    }`}
                    to="/contact"
                >
                    Contact
                </Link>
                <Link
                    className={`${
                        cmp === "auth" ? "home-header-container-nav-right--active-menu" : ""
                    }`}
                    to={`${
                        (location.pathname === "/sign-up" && "/sign-up") ||
                        (location.pathname === "/forgot-password" && "/forgot-password") ||
                        "/login"
                    }`}
                >
                    {(location.pathname === "/sign-up" && "Sign Up") ||
                        (location.pathname === "/forgot-password" && "Reset Password") ||
                        "Connexion"}
                </Link>
            </div>
        </div>
    );
};

export default Nav;

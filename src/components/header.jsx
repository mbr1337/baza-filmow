import React from "react";
import { Link } from "react-router-dom";
import '../styles/headerStyle.scss'

const Header = () => {
    const isNotLogged = localStorage.getItem("userLoginData");

    function logout() {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <header className="header">
            <div className="headerContainer">
                <div className="logo">
                    <Link to="/"><i className="fa fa-film" aria-hidden="true"></i></Link>
                </div>
                <div className="headerTitle">
                </div>
                <div className="login">
                    <section className="underline">
                        <span className="a">
                            {isNotLogged && <span className="text">

                                <a onClick={logout}>Logout </a>
                            </span>
                            }
                            {!isNotLogged && <span className="text">
                                <Link to="/signIn">Login</Link>
                                <hr />
                                <Link to="/signUp">Register</Link>
                            </span>
                            }
                            <span className="line -right"></span>
                            <span className="line -top"></span>
                            <span className="line -left"></span>
                            <span className="line -bottom"></span>
                        </span>
                    </section>
                </div>
            </div>
        </header>
    );
};

export default Header;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/headerStyle.scss'
export default class Header extends Component {

    render() {
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
                                <span className="text">
                                    <Link to="/signIn">Login</Link>
                                    <hr />
                                    <Link to="/signUp">Register</Link>
                                </span>
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
    }
}

import React, { Component } from "react";
import '../styles/headerStyle.scss'
export default class Header extends Component {
    // 
    render() {
        return (

            <header className="header">
                <div className="headerContainer">
                    {/* <div className="header33"> */}
                    <div className="logo">
                        <i className="fa fa-film" aria-hidden="true"></i>
                        {/* <img src="" alt="logo"/> */}
                    </div>
                    <div className="headerTitle">
                        Baza Filmowa
                    </div>
                    <div className="login">
                        <a href="">Login <i className="fa fa-sign-in" aria-hidden="true"></i></a>
                    </div>
                    {/* </div> */}
                </div>
            </header>

        );
    }
}

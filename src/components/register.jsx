import React, { useState, useRef } from "react";
import '../styles/registerStyle.scss'
import Footer from "./footer";
import Header from "./header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const inputRef = useRef();

    const handleChange = (event) => {
        setPass(event.target.value);
    };

    const handleChange2 = (event) => {
        setEmail(event.target.value);
    };

    const handleChange3 = (event) => {
        setLogin(event.target.value);
    };

    const handleChange4 = (event) => {
        setUsername(event.target.value);
    };

    const checkChar = () => {
        return pass.length >= 8 && pass.length <= 20;
    };

    const checkChar2 = () => {
        return login.length >= 6 && login.length <= 15;
    };

    const checkChar3 = () => {
        return username.length >= 4 && username.length <= 15;
    };

    const checkLower = () => {
        let reg = /[a-z]/;
        return reg.test(pass);
    };

    const checkUpper = () => {
        let reg = /[A-Z]/;
        return reg.test(pass);
    };

    const checkFocus = () => {
        if (document.activeElement === inputRef.current) {
            return true;
        } else {
            return false;
        }
    };

    const checkMail = () => {
        let reg = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
        return reg.test(email);
    };

    const finalCheck = () => {
        return checkChar2() && checkChar3() && checkUpper() && checkLower() && checkChar() && checkMail();
    };

    const sendForm = () => {
        axios.post('https://at.usermd.net/api/user/create', {
            'name': login,
            'email': email,
            'password': pass
        })
            .then(() => {
                navigate("/signIn");
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <Header />
            <div className="register">
                <input
                    type="text"
                    placeholder="login (6-15 chars)"
                    onChange={handleChange3}
                />
                <input
                    type="text"
                    placeholder="username (4-15 chars)"
                    onChange={handleChange4}
                />
                <input
                    type="email"
                    placeholder="email"
                    onChange={handleChange2}
                />
                <input
                    type="password"
                    placeholder="password"
                    ref={inputRef}
                    onClick={checkFocus.bind(this)}
                    onChange={handleChange}
                    onFocus={handleChange}
                />
                <div className="rules">
                    <ul className={this.checkFocus() ? "visible" : "hidden"}>
                        <li className={this.checkLower() ? "passed" : "missing"}>
                            1 lowercase character
                        </li>
                        <li className={this.checkUpper() ? "passed" : "missing"}>
                            1 uppercase character
                        </li>
                        <li className={this.checkChar() ? "passed" : "missing"}>
                            8 minimum characters
                        </li>
                    </ul>
                </div>
                <span style={this.checkChar2() ? { color: "green" } : { color: "red" }} className={this.checkChar2() ? "fa fa-check test1" : "fa fa-times test1"}> login</span>
                <span style={this.checkChar3() ? { color: "green" } : { color: "red" }} className={this.checkChar3() ? "fa fa-check test1" : "fa fa-times test1"}> username</span>
                <span style={this.checkMail() ? { color: "green" } : { color: "red" }} className={this.checkMail() ? "fa fa-check test1" : "fa fa-times test1"}> email address</span>
                <br></br>
                <button className="submitBtn" disabled={finalCheck() ? false : true} onClick={sendForm}> Register </button>
            </div>
            <Footer />
        </div>
    );
};
export default Register;

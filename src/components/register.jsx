import React, { useRef } from "react";
import '../styles/registerStyle.scss'
import Footer from "./footer";
import Header from "./header";
export default class Register extends React.Component {
    constructor(props) {
        super();
        this.state = {
            pass: "",
            email: "",
            login: "",
            username: "",
            hidden: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.checkChar = this.checkChar.bind(this);
        this.checkLower = this.checkLower.bind(this);
        this.checkUpper = this.checkUpper.bind(this);
        this.checkMail = this.checkMail.bind(this);
        this.finalCheck = this.finalCheck.bind(this);



    }
    inputRef = React.createRef();

    handleChange(event) {
        this.setState({
            pass: event.target.value,
        });
    }
    handleChange2(event) {
        this.setState({
            email: event.target.value
        });
    }
    handleChange3(event) {
        this.setState({
            login: event.target.value
        });
    }
    handleChange4(event) {
        this.setState({
            username: event.target.value
        });
    }

    checkChar() {
        return this.state.pass.length >= 8 && this.state.pass.length <= 20;
    }

    checkChar2() {
        return this.state.login.length >= 6 && this.state.login.length <= 15;
    }

    checkChar3() {
        return this.state.username.length >= 4 && this.state.username.length <= 15;
    }

    checkLower() {
        let reg = /[a-z]/;
        return reg.test(this.state.pass);
    }

    checkUpper() {
        let reg = /[A-Z]/;
        return reg.test(this.state.pass);
    }

    checkFocus() {
        if (document.activeElement === this.inputRef.current) {
            return true;
        } else {
            return false;
        }
    }

    checkMail() {
        let reg = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
        return reg.test(this.state.email)
    }

    finalCheck() {
        return this.checkChar2() && this.checkChar3() && this.checkUpper() && this.checkLower() && this.checkChar() && this.checkMail();
    }
    render() {
        return (
            <div>
                <Header />
                <div className="register">
                    <input
                        type="text"
                        placeholder="login (6-15 chars)"
                        onChange={this.handleChange3}
                    />
                    <input
                        type="text"
                        placeholder="username (4-15 chars)"
                        onChange={this.handleChange4}
                    />
                    <input
                        type="email"
                        placeholder="email"
                        onChange={this.handleChange2}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        ref={this.inputRef}
                        onClick={this.checkFocus.bind(this)}
                        onChange={this.handleChange}
                        onFocus={this.handleChange}
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
                    <button className="submitBtn" disabled={this.finalCheck() ? false : true}> Register </button>
                </div>
                <Footer />
            </div>
        );
    }
}


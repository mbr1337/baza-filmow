import React, { useRef } from "react";
import Footer from "./footer";
import Header from "./header";
export default class Login extends React.Component {

    constructor(props) {
        super();
        this.state = {
            login: "",
            pass: "",
            hidden: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.checkChar = this.checkChar.bind(this);
        this.finalCheck = this.finalCheck.bind(this);



    }
    handleChange(event) {
        this.setState({
            login: event.target.value,
        });
    }
    handleChange2(event) {
        this.setState({
            pass: event.target.value
        });
    }
    checkChar() {
        return this.state.pass.length >= 8 && this.state.pass.length <= 20;
    }
    checkChar2() {
        return this.state.login.length >= 6 && this.state.login.length <= 15;
    }
    finalCheck() {
        return this.checkChar() && this.checkChar2();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="register">
                    <input
                        type="text"
                        placeholder="login"
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        onChange={this.handleChange2}
                    />

                    <button className="submitBtn" disabled={this.finalCheck() ? false : true}> Login </button>
                </div>
                <Footer />
            </div>
        );
    }
}


import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setLogin(event.target.value);
    };

    const handleChange2 = (event) => {
        setPass(event.target.value);
    };

    const checkChar = () => {
        return pass.length >= 8 && pass.length <= 20;
    };

    const checkChar2 = () => {
        return login.length >= 6 && login.length <= 15;
    };

    const finalCheck = () => {
        return checkChar() && checkChar2();
    };

    const sendForm = () => {
        axios
            .post("https://at.usermd.net/api/user/auth", {
                login: login,
                password: pass,
            })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("userLoginData", JSON.stringify({ login, pass }));
                localStorage.setItem("JWT", response.data.token);
                navigate("/");
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
                <input type="text" placeholder="login" onChange={handleChange} />
                <input
                    type="password"
                    placeholder="password"
                    onChange={handleChange2}
                />
                <button
                    className="submitBtn"
                    disabled={finalCheck() ? false : true}
                    onClick={sendForm}
                >
                    {" "}
                    Login{" "}
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
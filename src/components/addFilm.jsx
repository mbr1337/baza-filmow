import React, { Component } from "react";
import Footer from "./footer";
import Header from "./header";
import "../styles/addFilmStyle.scss"
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default class AddFilms extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            summary: '',
            imgAlt: '',
            rating: '',
            image: ''
        };
        // this.navigate = useNavigate();
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
    }

    handleChange(event) {
        this.setState({
            title: event.target.value,
        });
    }
    handleChange2(event) {
        this.setState({
            author: event.target.value,
        });
    }
    handleChange3(event) {
        this.setState({
            summary: event.target.value,
        });
    }
    handleChange4(event) {
        this.setState({
            rating: event.target.value,
        });
    }
    handleChange5(event) {
        this.setState({
            image: event.target.value,
        });
    }
    isFormValid = () => {

        return this.state.title && this.state.summary && this.state.image
    };

    sendForm = () => {
        axios.post('https://at.usermd.net/api/movies', {
            title: this.state.title,
            image: this.state.image,
            content: this.state.summary,
        })
            .then(function (response) {
                console.log(response);
                // navigate("/");
                // window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container1">
                    <form method="post" >
                        <div className="addFilms">
                            <input
                                onChange={this.handleChange}
                                type="text"
                                placeholder="Title"
                                required={true}
                            />
                            <input
                                onChange={this.handleChange2}
                                type="text"
                                placeholder="Author"
                                required={false}
                            />
                            <textarea
                                onChange={this.handleChange3}
                                placeholder="Summary"
                                required={true}
                                wrap="off"
                                rows="5"
                                cols="10"
                            >
                            </textarea>
                            <input
                                type="text"
                                onChange={this.handleChange5}
                                placeholder="Image link"
                                required={true}
                            />
                            <input
                                onChange={this.handleChange4}
                                type="number"
                                placeholder="Rating"
                                min="1"
                                max="10"
                                required={false}
                            />
                            <input
                                type="text"
                                placeholder="Image Alt"
                            />
                        </div>
                        <div className="submit">
                            <button className="submitBtn" disabled={this.isFormValid() ? false : true} onClick={this.sendForm} >Submit</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
};
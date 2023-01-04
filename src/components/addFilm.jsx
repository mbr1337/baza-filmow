import React, { Component } from "react";
import Footer from "./footer";
import Header from "./header";
import "../styles/addFilmStyle.scss"
import { faL } from "@fortawesome/free-solid-svg-icons";

export default class AddFilms extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            summary: '',
            imgAlt: '',
            rating: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
    }
    // handleChange(event) {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({ [name]: value });
    // } z jakiegos powodu nie dziala :))))

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
            imgAlt: event.target.value,
        });
    }
    isFormValid = () => {

        return this.state.title && this.state.author && this.state.summary && this.state.imgAlt && this.state.rating
    };
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
                                required={true}
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
                            <label htmlFor="file-upload" className="custom-file-upload">
                                Image Upload
                            </label>
                            <input
                                id="file-upload"
                                type="file" />
                            <input
                                onChange={this.handleChange4}
                                type="number"
                                placeholder="Rating"
                                min="1"
                                max="999"
                                required={true}
                            />
                            <input
                                onChange={this.handleChange5}
                                type="text"
                                placeholder="Image Alt"
                            />
                        </div>
                        <div className="submit">
                            <button className="submitBtn" disabled={this.isFormValid() ? false : true} >Submit</button>
                        </div>

                    </form>



                </div>
                <Footer />
            </div>
        );
    }
}
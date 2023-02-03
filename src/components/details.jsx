import React from "react";
import "../styles/detailsStyle.scss";
import Footer from "./footer";
import Header from "./header";
import axios from "axios";

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            responseData: null
        };
    }
    render() {
        const url = window.location.href;
        const lastPart = url.substring(url.lastIndexOf('/') + 1);
        let movieData = "";
        axios.get(`https://at.usermd.net/api/movies/${lastPart}`)
            .then((response) => {
                this.setState({ responseData: response.data });
            })
            .catch(function (error) {
                console.error();
            });
        if (!this.state.responseData) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Header />
                <figure className="fig">
                    <div className="rowT">
                        <img id="blurred" src={this.state.responseData.image} alt="123" className="profile" />
                        <img id="cover" src={this.state.responseData.image} alt="123" className="profile" />
                    </div>
                    <figcaption>
                        <h2>{this.state.responseData.title} </h2>
                        <h4>Author</h4>
                        <h6>{this.state.responseData.content}</h6>
                    </figcaption>
                </figure>

                <Footer />
            </div>
        )
    }
}
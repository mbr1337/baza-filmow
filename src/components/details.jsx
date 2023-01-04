import React from "react";
import "../styles/detailsStyle.scss";
import Footer from "./footer";
import Header from "./header";
import HTTYD from '../images/HTTYD.jpg';

export default class Details extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <figure className="fig">
                    <div className="rowT">
                        <img id="blurred" src={HTTYD} alt="123" className="profile" />
                        <img id="cover" src={HTTYD} alt="123" className="profile" />
                    </div>
                    <figcaption>
                        <h2>Jak Wytresować Smoka</h2>
                        <h4>Chris Sanders, Dean DeBlois</h4>
                        <h6>Bardzo długi opis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h6>
                    </figcaption>
                </figure>

                <Footer />
            </div>
        )
    }
}
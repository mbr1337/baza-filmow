import React, { useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import "../styles/addFilmStyle.scss"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFilms = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [summary, setSummary] = useState("");
    const [imgAlt, setImgAlt] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const isFormValid = () => title && summary && image;

    const sendForm = (e) => {
        e.preventDefault();
        axios
            .post("https://at.usermd.net/api/movies", {
                title,
                image,
                content: summary,
            })
            .then(() => {
                navigate("/");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <Header />
            <div className="container1">
                <form method="post">
                    <div className="addFilms">
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="Title"
                            required={true}
                        />
                        <input
                            onChange={(e) => setAuthor(e.target.value)}
                            type="text"
                            placeholder="Author"
                            required={false}
                        />
                        <textarea
                            onChange={(e) => setSummary(e.target.value)}
                            placeholder="Summary"
                            required={true}
                            wrap="off"
                            rows="5"
                            cols="10"
                        />
                        <input
                            type="text"
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="Image link"
                            required={true}
                        />
                        <input
                            onChange={(e) => setRating(e.target.value)}
                            type="number"
                            placeholder="Rating"
                            min="1"
                            max="10"
                            required={false}
                        />
                        <input
                            type="text"
                            onChange={(e) => setImgAlt(e.target.value)}
                            placeholder="Image Alt"
                        />
                    </div>
                    <div className="submit">
                        <button
                            className="submitBtn"
                            disabled={!isFormValid()}
                            onClick={sendForm}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddFilms;

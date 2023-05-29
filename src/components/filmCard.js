import '../styles/filmStyle.scss'
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
export default class Filmcard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            IsCardOpen: props.IsCardOpen,
            testowy: null,
        };
        this.user = decodeToken(localStorage.getItem('JWT'));

        // console.log(this.props.movieid);
    }

    removeFilm(id) {
        axios.delete(`https://at.usermd.net/api/movie/${id}`)
            .then(() => {
                window.location.reload();
            })

    }

    render() {
        return (
            <div className="center list flex-column">
                <div
                    className={this.state.IsCardOpen ? "card flex-row open" : "card flex-row"}
                    onClick={() => {
                        this.setState({
                            IsCardOpen: !this.state.IsCardOpen
                        });
                    }}
                >
                    <img
                        src={this.props.ImgSrc}
                        className="book"
                        alt={this.props.Alt}
                    />
                    <div className="flex-column info">
                        <div className="title">{this.props.Title}</div>
                        <div className="author">{this.props.Author}</div>
                        <div className="hidden bottom summary">
                            {this.props.Summary}
                        </div>
                    </div>
                    <div className="flex-column group">
                        <div className="members">
                            <span className="current">{this.props.CurrentRating}</span> /
                            <span className="max">{this.props.MaxRating}</span>
                        </div>
                        <div className="hidden bottom">
                            <Link to={"/details/" + this.props.movieid}>
                                <button className="simple">Details</button>
                            </Link>
                            {this.user && this.user.isAdmin ? <button className="simple" onClick={() => this.removeFilm(this.props.movieid)}>Remove</button> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
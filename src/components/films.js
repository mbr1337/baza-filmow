import '../styles/filmStyle.scss'
import React, { Component } from "react";
import HTTYD from '../images/HTTYD.jpg';
import WL from '../images/Wonderful_life.jpeg';
import HB from '../images/Hacksaw_Ridge.png';
import ROTS from '../images/ROTS.jpg'
import Filmcard from './filmCard';


const filmArr = [
    {
        Id: 1,
        ImgSrc: HTTYD,
        Alt: "Jak wytresowac smoka",
        Title: "How To Train Your Dragon",
        Author: "Chris Sanders, Dean DeBlois",
        Summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.",
        CurrentRating: 10,
        MaxRating: 10,
        IsCardOpen: true
    },
    {
        Id: 2,
        ImgSrc: WL,
        Alt: "To wspaniale zycie",
        Title: "It's A Wonderful Life",
        Author: "Frank Capra",
        Summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.",
        CurrentRating: 7,
        MaxRating: 10,
        IsCardOpen: false
    },
    {
        Id: 3,
        ImgSrc: HB,
        Alt: "Przelecz ocalonych",
        Title: "Hacksaw Ridge",
        Author: "Mel Gibson",
        Summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.",
        CurrentRating: 9,
        MaxRating: 10,
        IsCardOpen: false
    },
    {
        Id: 4,
        ImgSrc: ROTS,
        Alt: "Gwiezdne wojny Zemsta Sithow",
        Title: "Star Wars - Revenge of the Sith",
        Author: "George Lucas",
        Summary: "Did you ever hear the tragedy of Darth Plagueis the Wise? I thought not.It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis... was a Dark Lord         of the Sith so powerful and so wise, he could use the Force to influence the midi- chlorians...to create...life. He had such a knowledge of the dark side, he could even keep the ones he cared about...from dying.",
        CurrentRating: 10,
        MaxRating: 10,
        IsCardOpen: false
    },
];

export default class Films extends Component {
    filmRef = React.createRef();

    render() {
        return (
            <div className="container">
                {
                    filmArr.map(film => (
                        <Filmcard
                            ref={this.filmRef}
                            IsCardOpen={film.IsCardOpen}
                            key={film.Id}
                            ImgSrc={film.ImgSrc}
                            Alt={film.Title}
                            Title={film.Title}
                            Author={film.Author}
                            Summary={film.Summary}
                            CurrentRating={film.CurrentRating}
                            MaxRating={film.MaxRating}
                        />
                    ))
                }

            </div>
        );
    }
}
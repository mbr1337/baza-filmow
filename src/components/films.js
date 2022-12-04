import '../styles/filmStyle.scss'
import $ from 'jquery'
import React, { Component } from "react";
import HTTYD from '../images/HTTYD.jpg';
import WL from '../images/Wonderful_life.jpeg';
import HB from '../images/Hacksaw_Ridge.png';
import ROTS from '../images/ROTS.jpg'
export default class Films extends Component {

    componentDidMount() {
        let old = $('.card').get(0);
        $('.card').on("click", function () {
            if (old != null && $(old).hasClass('open'))
                $(old).toggleClass('open');
            // console.log($(this));
            $(this).toggleClass('open');
            old = this;
        });
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="center list flex-column">
                        <div className="card flex-row open">
                            <img
                                src={HTTYD}
                                className="book"
                                alt='Jak wytresowac smoka'
                            />
                            <div className="flex-column info">
                                <div className="title">How To Train Your Dragon</div>
                                <div className="author">Chris Sanders, Dean DeBlois</div>
                                <div className="hidden bottom summary">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                                    ratione impedit temporibus maiores autem aperiam assumenda
                                    exercitationem, quisquam nobis esse.
                                </div>
                            </div>
                            <div className="flex-column group">
                                <div className="members">
                                    <span className="current">10</span> /
                                    <span className="max">10</span>
                                </div>
                                <div className="hidden bottom">
                                    <button className="simple">Button</button>
                                </div>
                            </div>
                        </div>
                        <div className="card flex-row">
                            <img
                                src={WL}
                                className="book"
                                alt='To wspaniale zycie'
                            />
                            <div className="flex-column info">
                                <div className="title">It's A Wonderful Life</div>
                                <div className="author">Frank Capra</div>
                                <div className="hidden bottom summary">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                                    ratione impedit temporibus maiores autem aperiam assumenda
                                    exercitationem, quisquam nobis esse.
                                </div>
                            </div>
                            <div className="flex-column group">
                                <div className="members">
                                    <span className="current">7</span> /
                                    <span className="max">10</span>
                                </div>
                                <div className="hidden bottom">
                                    <button className="simple">Button</button>
                                </div>
                            </div>
                        </div>
                        <div className="card flex-row">
                            <img
                                src={HB}
                                className="book"
                                alt='Przelecz ocalonych'
                            />
                            <div className="flex-column info">
                                <div className="title">Hacksaw Ridge</div>
                                <div className="author">Mel Gibson</div>
                                <div className="hidden bottom summary">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                                    ratione impedit temporibus maiores autem aperiam assumenda
                                    exercitationem, quisquam nobis esse.
                                </div>
                            </div>
                            <div className="flex-column group">
                                <div className="members">
                                    <span className="current">9</span> /
                                    <span className="max">10</span>
                                </div>
                                <div className="hidden bottom">
                                    <button className="simple">Button</button>
                                </div>
                            </div>
                        </div>
                        <div className="card flex-row">
                            <img
                                src={ROTS}
                                className="book"
                                alt='Gwiezdne wojny Zemsta Sithow'
                            />
                            <div className="flex-column info">
                                <div className="title">Star Wars - Revenge of the Sith</div>
                                <div className="author">George Lucas</div>
                                <div className="hidden bottom summary">
                                    Did you ever hear the tragedy of Darth Plagueis the Wise?
                                    I thought not. It's not a story the Jedi would tell you.
                                    It's a Sith legend. Darth Plagueis... was a Dark Lord
                                    of the Sith so powerful and so wise, he could use the
                                    Force to influence the midi-chlorians... to create... life.
                                    He had such a knowledge of the dark side,
                                    he could even keep the ones he cared about... from dying.
                                </div>
                            </div>
                            <div className="flex-column group">
                                <div className="members">
                                    <span className="current">10</span> /
                                    <span className="max">10</span>
                                </div>
                                <div className="hidden bottom">
                                    <button className="simple">Button</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
        );
    }
}
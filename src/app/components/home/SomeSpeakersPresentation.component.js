import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SomeNews from './SomeNews.component';

const COUNT_DISPLAYED_SPEAKERS = 4;

class SomeSpeakersPresentation extends Component {
    constructor(props) {
        super(props);
        this.getRandomSpeaker = this.getRandomSpeaker.bind(this);
        this.getRandomSpeakers = this.getRandomSpeakers.bind(this);
    }

    getRandomSpeaker(ref = []) {
        const { speakers } = this.props;
        const randomSpeaker = speakers[Math.floor(Math.random() * speakers.length)];
        const isSelected = ref.find(r => r['Nom'] === randomSpeaker['Nom']) > -1;

        return isSelected ? this.getRandomSpeaker(ref) : randomSpeaker;
    }

    getRandomSpeakers() {
        const speakers = [];
        if (this.props.speakers.length > 0) {
            for (let i = 0; i < COUNT_DISPLAYED_SPEAKERS; i++) {
                speakers.push(this.getRandomSpeaker(speakers));
            }
        }
        return speakers;
    }

    render() {
        return (
            <div className="row speakers text-center">
                <div className="column small-24 sectionTitle">
                    <h5 className="sectionTitle">Nos speakers</h5>
                    <h6 className="sectionSubTitle">On vous a choisi quelques profils de façon aléatoire de façon à vous mettre l'eau à la bouche</h6>
                </div>

                <div className="column small-24 speakers-container">
                    <div className="row speakers-container-content">
                        {this.getRandomSpeakers().map((speaker, i) => {
                            return (<div key={`'speaker_${i}`}>
                                <img className="column auto align-center speakers-container-content-picture"
                                    src={speaker['Avatar url']} />
                                <div className="column auto align-center speakers-container-content-text">
                                    <h4>{speaker['Prénom']} {speaker['Nom']}</h4>
                                    <h6>{speaker['Bio']}</h6>
                                    <div>
                                        <span>{speaker['Twitter']}</span>
                                        <span>{speaker['Linkedin']}</span>
                                        <span>{speaker['Google+']}</span>
                                        <span>{speaker['Blog']}</span>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>

                <div className="column align-center">
                    <Link className="columns shrink text-center button small secondary" to={"/speakers"}>Les voir tous</Link>
                </div>
            </div>
        );
    }
}

SomeSpeakersPresentation.propTypes = {
    speakers: PropTypes.array.isRequired,
}

export default SomeSpeakersPresentation
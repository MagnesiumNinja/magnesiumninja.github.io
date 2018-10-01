import React from 'react';
import twitterIcon from '../images/twitter.svg';

export default class LinksBox extends React.Component {
    render() {
        return (
            <div className="featureBox">  
                <span className="row vertical-align">
                    <span className="col-8 align-middle"> 
                        <iframe title="Steam" src="https://store.steampowered.com/widget/745560/" frameBorder="0" width="100%" height="256px"></iframe>
                    </span>
                    <span className="col-4 align-middle">
                        <a href="https://twitter.com/MagnesiumNinja" target="_blank"  rel="noopener noreferrer" alt="Twitter">
                            <img className="twitterLink" src={twitterIcon} alt="Twitter" />
                        </a>   
                    </span> 
                </span>
            </div>
        );
    }
}
import React, { Component } from 'react';
import './App.css';
import './style.css';
import divider from './images/divider.png';
import Cloud from './Components/Cloud';
import ResponsivePlayer from './Components/ResponsivePlayer';
import FeatureBox from './Components/FeatureBox';
import Gallery from './Components/Gallery';
import BannerLogo from './Components/BannerLogo';
import HoverableImage from './Components/HoverableImage';

const GALLERY_IMAGES = [    
    { src: "screenshots/steam_launch5.png",  thumbnail: "screenshots/steam_launch5.png"},    
    { src: "screenshots/steam_launch7.png", thumbnail: "screenshots/steam_launch7.png"},    
    { src: "screenshots/steam_launch4.png", thumbnail: "screenshots/steam_launch4.png"},
    { src: "screenshots/steam_launch2.png", thumbnail: "screenshots/steam_launch2.png"},    
    { src: "screenshots/steam_launch6.png", thumbnail: "screenshots/steam_launch6.png"},    
    { src: "screenshots/steam_launch3.png", thumbnail: "screenshots/steam_launch3.png"},    
    { src: "screenshots/steam_launch8.png", thumbnail: "screenshots/steam_launch8.png"},
	{ src: "screenshots/steam_launch1.png",  thumbnail: "screenshots/steam_launch1.png"},
];

function updateImgPaths(imgSrc) {
    return require(`./images/${imgSrc}`)
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="parallax">
                    <div className="parallax__group">
                        <div className="parallax__layer parallax__layer--base">
                            <div className="socialMediaLinks">
                                <a href="https://twitter.com/magnesiumninja" target="_blank" rel="noopener noreferrer">
                                <HoverableImage className="socialMediaIcon" mainImg="twitter.png" hoverImg="twitter_hover.png" alt="Twitter"/>
                                </a>
                                {/* <a href="https://magnesiumninja.tumblr.com">
                                    <HoverableImage className="socialMediaIcon" mainImg="tumblr.png" hoverImg="tumblr_hover.png" alt="Tumblr"/>
                                </a> */}
                            </div>
                            <div className="header">
                                <BannerLogo />
                            </div>     
                            <div className="container">
                                <div><p id="tagLine" className="bold">Experience a rhythmic blend of combat and platforming as you fight to unravel a mystery that threatens to tear your city apart.</p></div>
                                <ResponsivePlayer />
                            </div>    

                            <div id="mainContent">  
                                <img id="contentDivider" src={divider}/>
                                <div className="container">
                                    <div className="steamLink">
                                        <iframe title="Steam" src="https://store.steampowered.com/widget/745560/" frameBorder="0" width="70%" height="220"></iframe>
                                    </div>

                                    <FeatureBox animSrc="Combat.gif">
                                        <h4>Experience a Rhythmic Blend of Combat and Platforming</h4>
                                        In Overclocked, one hit means death. Gameplay is divided into short levels that constantly throw new obstacles at the player. In order to survive, you must learn to constantly adapt to these challenges. To thrive, you must master the controls and your ability to fight.
                                    </FeatureBox>

                                    <FeatureBox animSrc="Dialogue.gif" imgLeft={true}>
                                        <h4>Unravel a Mystery Threatening your Home</h4>
                                        Each episode in Overclocked is driven forward by a compelling story of intrigue and danger. Follow Amber as she and her friends work together to hunt down the source of a virus that is taking control of the people around them.
                                    </FeatureBox>

                                    <FeatureBox animSrc="Challenges.gif" >
                                        <h4>Push Beyond your Limits</h4>
                                        Finding the main story too easy? Each stage has a bonus objective waiting to be conquered. Complete enough of these bonus objectives and you’ll unlock brutally difficult challenge levels that will put even the best players to the test.
                                    </FeatureBox>

                                    <Gallery images={GALLERY_IMAGES.map(({ src, thumbnail,  caption }) => ({
                                        src: updateImgPaths(src),
                                        thumbnail: updateImgPaths(thumbnail), 
                                        caption
                                    }))} showThumbnails />

                                    <div className="footer">
                                        <p>Website made with ❤ by Rhea Lauzon</p> 
                                        <p>Copyright Magnesium Ninja 2018</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="clouds" className="parallax__group">
                        <div className="parallax__layer parallax__layer--deep">
                            <Cloud cloudType={4} depth={0.45} xOffset={0.9} yOffset={0}/>
                            <Cloud cloudType={0} depth={0.5} xOffset={0.3} yOffset={5}/>
                            <Cloud cloudType={3} depth={0.3} xOffset={0.7} yOffset={50}/>
                            <Cloud cloudType={2} depth={0.25} xOffset={0.1} yOffset={80}/>
                            <Cloud cloudType={1} depth={0.5} xOffset={0.55} yOffset={110}/>                            
                        </div>
                    </div>                  
                </div>                
        </div>
        );
    }
}

export default App;

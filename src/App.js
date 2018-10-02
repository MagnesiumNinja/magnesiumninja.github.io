import React, { Component } from 'react';
import './App.css';
import './style.css';
import footer from './images/footer.png';
import Cloud from './Components/Cloud';
import ResponsivePlayer from './Components/ResponsivePlayer';
import  ParallaxLayer from './Components/ParallaxLayer';
import FeatureBox from './Components/FeatureBox';
import Gallery from './Components/Gallery';
import BannerLogo from './Components/BannerLogo';

const GALLERY_IMAGES = [
	{ src: "screenshots/steam_store1.png",  thumbnail: "screenshots/steam_store1.png", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { src: "screenshots/steam_store2.png", thumbnail: "screenshots/steam_store2.png", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { src: "screenshots/steam_store3.png", thumbnail: "screenshots/steam_store3.png", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { src: "screenshots/steam_store4.png", thumbnail: "screenshots/steam_store4.png", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
	{ src: "screenshots/steam_store5.png",  thumbnail: "screenshots/steam_store5.png", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { src: "screenshots/steam_store6.png", thumbnail: "screenshots/steam_store6.png", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { src: "screenshots/steam_store7.png", thumbnail: "screenshots/steam_store7.png", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    { src: "screenshots/steam_store8.png", thumbnail: "screenshots/steam_store8.png", caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
];

function updateImgPaths(imgSrc) {
    return require(`./images/${imgSrc}`)
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <ParallaxLayer speed={0.3} yOffset={.10}><Cloud depth={0.3}xOffset={0.7}/></ParallaxLayer>
                <ParallaxLayer speed={0.10} yOffset={0.15}><Cloud depth={0.1} xOffset={0.2}/></ParallaxLayer>
                <ParallaxLayer speed={0.05} yOffset={0.30}><Cloud depth={0.05} xOffset={0.5}/></ParallaxLayer>
                <ParallaxLayer speed={.20} yOffset={0.20}><img className="city" src={footer} alt="Vancouver Cityscape Footer"/></ParallaxLayer> 

                <div className="header">
                    <BannerLogo />
                </div>     

                <div className="container">
                    <ResponsivePlayer />
                    <div><p className="bold">Experience a rhythmic blend of combat and platforming as you fight to unravel a mystery that threatens to tear your city apart.</p></div>
                    
                    <div className="embed-responsive embed-responsive-16by9 steamLink">
                        <iframe className="embed-responsive-item" title="Steam" src="https://store.steampowered.com/widget/745560/" frameBorder="0" ></iframe>
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
                </div>
                
                <div className="footer">
                    <p>Website Designed by Rhea Lauzon. Copyright 2018 Magnesium Ninja.</p> 
                </div>
        </div>
        );
    }
}

export default App;

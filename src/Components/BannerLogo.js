import React, { Component } from 'react';
import logo_left from '../images/logo-left.png';
import logo_right from '../images/logo-right.png';
import logo from '../images/logo.gif';

const MAX_WIDTH = 1366;
const MAX_HEIGHT = 256;
const EDGE_WIDTH = 24;
const EDGE_RATIO = EDGE_WIDTH / MAX_WIDTH;
const ASPECT_RATIO = MAX_WIDTH / MAX_HEIGHT;

export default class BannerLogo extends Component {
    constructor(props) {
        super(props);
        
        this.handleResize = this.handleResize.bind(this);

        this.state = { edgeWidth: 0, centerWidth: 0};
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);        
    }

    handleResize() {
        let height = Math.min(MAX_HEIGHT, window.innerWidth / ASPECT_RATIO); 
        this.setState({ logoHeight: height});
    }

    render () {
        const edgeStyle = { 
            height: this.state.logoHeight,
        };

        const centerStyle = {
            height: this.state.logoHeight,
        }

        return (
            <div className="banner-container">
                <img src={logo_left} alt="Logo Banner Left" style={edgeStyle}/>
                <div id="logo">
                    <img id="logoText" src={logo} alt="Overclocked" style={centerStyle}/>
                </div>
                <img src={logo_right} alt="Logo Banner Right" style={edgeStyle}/>
            </div>
        )
    }
}
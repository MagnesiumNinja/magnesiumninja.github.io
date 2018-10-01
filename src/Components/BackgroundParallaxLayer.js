import React from 'react';
import PropTypes from 'prop-types';
import bg from '../images/sky.png';

export default class BackgroundParallaxLayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { speed: this.props.speed, 
                       yOffset: this.props.yOffset,
                       transform: 0, 
                    };

        // Bind "this" into the handle scroll function.
        this.handleScroll = this.handleScroll.bind(this);
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.handleScroll);
        this.handleScroll();

        var body = document.body;
        var html = document.documentElement;

        var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
                       
        console.log("document-height", height);

        this.setState({ pageHeight: height});
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener("resize", this.handleScroll);        
    }

    handleScroll(event) {
        var body = document.body;
        var html = document.documentElement;

        let pageHeight = Math.max(body.scrollHeight, body.offsetHeight, 
                                    html.clientHeight, html.scrollHeight, html.offsetHeight);
        let componentHeight = this.state.componentHeight;
        var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        let speed = (componentHeight - viewportHeight) / -(pageHeight - viewportHeight);

        let offset = window.scrollY + (( window.scrollY * speed));

        this.setState({ transform: offset });
    }

    onImgLoad({target: img}) {
        this.setState({componentHeight: img.offsetHeight});
    }

    render() {
        const styles = { 
            transform: `translate3d(0, ${this.state.transform}px, 0)`,
            maxWidth: 'inherit'
        };

        return (
            <div className="background" style={styles}>  
                <img  onLoad={this.onImgLoad} src={bg} alt=""/>
            </div>    
        );
    }
}

BackgroundParallaxLayer.propTypes = {
    speed: PropTypes.number,
    yOffset: PropTypes.number,
};
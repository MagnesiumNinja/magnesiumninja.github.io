import React from 'react';
import PropTypes from 'prop-types';

export default class ParallaxLayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { speed: this.props.speed, 
                       yOffset: this.props.yOffset,
                       transform: 0, 
                    };

        // Bind "this" into the handle scroll function.
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.handleScroll);
        this.handleScroll();
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener("resize", this.handleScroll);        
    }

    handleScroll(event) {
        let speed = this.state.speed;
        let yOffset = this.state.yOffset;

        
        let body = document.body;
        let html = document.documentElement;

        let height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

        let offset = window.scrollY + ((yOffset * height)- window.scrollY * speed);

        this.setState({ transform: offset, pageHeight: height});
    }

    render() {
        const styles = { 
            transform: `translateY(${this.state.transform}px)`,
            maxWidth: 'inherit'
        };

        return (
            <div style={styles}>  
                {this.props.children}
            </div>    
        );
    }
}

ParallaxLayer.propTypes = {
    speed: PropTypes.number.isRequired,
    yOffset: PropTypes.number.isRequired,
};
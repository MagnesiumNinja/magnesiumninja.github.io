import React from 'react';
import PropTypes from 'prop-types';

export default class ParallaxLayer extends React.Component {
    constructor(props) {
        super(props);

        this.speed = this.props.speed;
        this.yOffset = this.props.yOffset;

        this.state = {
                       transform: 0
                    };

        // Bind "this" into the handle scroll function.
        this.handleScroll = this.handleScroll.bind(this);
        this.scrolled = false;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.handleScroll);
        window.addEventListener("wheel", this.handleScroll);
        this.handleScroll();
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener("resize", this.handleScroll);    
        window.removeEventListener("wheel", this.handleScroll);    
    }

    handleScroll(event) {
        if (!this.scrolled) {
            this.scrolled = true;
            let speed = this.speed;
            let yOffset = this.yOffset;

            
            let body = document.body;
            let html = document.documentElement;

            this.pageHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                                html.clientHeight, html.scrollHeight, html.offsetHeight );

            let offset = window.scrollY + ((yOffset * this.pageHeight)- window.scrollY * speed);        
        
            this.setState({ transform: offset});
            this.scrolled = false;
        }
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
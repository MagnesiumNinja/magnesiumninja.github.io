import React from 'react';
import PropTypes from 'prop-types';

export default class HoverableImage extends React.Component {
    constructor(props) {
        super(props);

        let activeSrc = this.props.mainImg;
        let staticTransition = false;

        if (this.props.hoverImg) {
            activeSrc = this.props.mainImg;
            staticTransition = true;
        }

        this.state = { activeSrc: activeSrc, transition: staticTransition };

        // Bind "this" into the handler functions.
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }
    
    handleMouseHover() {
        if (this.state.transition) {
            let newState = (this.state.activeSrc === this.props.mainImg) ? this.props.hoverImg : this.props.mainImg; 
            this.setState({ activeSrc: newState });
        }
    }


    render() {
        return (
            <span onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                <img src={require(`../images/${this.state.activeSrc}`)}  className={this.props.className} alt={this.props.alt}/>
            </span>
        );
    }
}

HoverableImage.propTypes = {
    mainImg: PropTypes.string.isRequired,
    hoverImg: PropTypes.string.isRequired
};

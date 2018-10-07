import React from 'react';
import PropTypes from 'prop-types';

export default class FeatureBox extends React.Component {
    constructor(props) {
        super(props);

        let activeSrc = this.props.animSrc;
        let staticTransition = false;

        if (this.props.staticSrc) {
            activeSrc = this.props.staticSrc;
            staticTransition = true;
        }

        this.state = { activeSrc: activeSrc, transition: staticTransition };

        // Bind "this" into the handler functions.
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.renderText = this.renderText.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.handeElementOrder = this.handeElementOrder.bind(this);
    }
    
    handleMouseHover() {
        if (this.state.transition) {
            let newState = (this.state.activeSrc === this.props.staticSrc) ? this.props.animSrc : this.props.staticSrc; 
            this.setState({ activeSrc: newState });
        }
    }

    renderText() {
        return (
            <span className="featureBlurb col-lg-6"> {this.props.children} </span>
        );
    }

    renderImage() {
        return (
            <span onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} className="col-lg-6">
                <img src={require(`../images/screenshots/${this.state.activeSrc}`)}  className="animScreenshot" alt="screenshot"/>
            </span>
        );
    }

    handeElementOrder() {
        if (this.props.imgLeft) {
            return (
                <span className="row">
                    { this.renderImage() }
                    { this.renderText() }
                </span>
            );
        }
        else {
            return (
                <span className="row">
                    { this.renderText() }
                    { this.renderImage() }
                </span>
            );
        }
    }

    render() {
        return (
            <div className="featureBox">  
                { this.handeElementOrder() }
            </div>
        );
    }
}

FeatureBox.propTypes = {
    staticSrc: PropTypes.string.isRequired.optional,
    animSrc: PropTypes.string.isRequired,
    imgLeft: PropTypes.bool
};

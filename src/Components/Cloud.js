import React from 'react';
import PropTypes from 'prop-types';
import CloudDaytime1 from '../images/CloudDaytime1.png';
import CloudDaytime2 from '../images/CloudDaytime2.png';
import CloudDaytime3 from '../images/CloudDaytime3.png';
import CloudDaytime4 from '../images/CloudDaytime4.png';
import CloudDaytime5 from '../images/CloudDaytime5.png';

let clouds = [
    CloudDaytime1,
    CloudDaytime2,
    CloudDaytime3,
    CloudDaytime4,
    CloudDaytime5
];

/** Cloud Constants  */
const MIN_DRIFT = 2.40;
const MAX_DRIFT = 10.8;

const MIN_SCALE = 0.4;
const MAX_SCALE = 1.6;
const NATIVE_RES = 1366;

export default class Cloud extends React.Component {
    constructor(props) {
        super(props);

        let image = (this.props.cloudType >= 0) ? clouds[this.props.cloudType] : this.pickCloudImage();
        
        this.state = { depth: this.props.depth, 
                        image: image,
                        speed: this.deriveSpeed(this.props.depth),
                        scale: this.deriveSize(this.props.depth)
                    };
        
    }

    deriveTint() {
        //TODO: idk
    }

    deriveSpeed(depth) {
        let speed = this.lerp(MIN_DRIFT, MAX_DRIFT, 1 - depth);

        var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        return (viewportWidth / speed);
    }

    deriveSize(depth ) {
        return this.lerp(MIN_SCALE, MAX_SCALE, 1 - depth) * Math.min(1, (window.innerWidth / NATIVE_RES));
    }

    lerp(value1, value2, amount) {
        return value1 + (value2 - value1) * amount;
    }

    pickCloudImage() {
        return clouds[Math.floor(Math.random()*clouds.length)];
    }      

    render() {
        const styles = { 
            position: 'absolute',  
            animation: `slide ${this.state.speed}s linear infinite`,
            animationDelay: `-${this.state.speed * this.props.xOffset}s`,
            transform: `scale(${this.state.scale}, ${this.state.scale})`,
            msTransform: `scale(${this.state.scale}, ${this.state.scale})`,
            WebkitTransform: `scale(${this.state.scale}, ${this.state.scale})`,
            top: `${this.props.yOffset}vh`
        };

        return (
            <div>  
                <img src={this.state.image} alt="Cloud" className="cloud" style={styles}/>
            </div>    
        );
    }
}

Cloud.propTypes = {
    cloudType: PropTypes.number,
    depth: PropTypes.number.isRequired,
    xOffset: PropTypes.number.isRequired,
    yOffset: PropTypes.number.isRequired
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';

export default class Gallery extends Component {
    constructor () {
		super();

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }
    
	openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
    }
    
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
    }
    
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
    }
    
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
    }
    
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
    }
    
	handleClickImage () {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
    }
    
	renderGallery () {
		const { images } = this.props;

		if (!images) return;

		const gallery = images.map((obj, i) => {
			return (
				<a
					href={obj.src}
					key={i}
                    onClick={(e) => this.openLightbox(i, e)}
                    className="gallery-thumbnail col-lg-6"
				>
					<img src={obj.thumbnail} className="gallery-source" alt={obj.caption}/>
				</a>
			);
		});

		return (
			<div className="gallery row">
				{gallery}
			</div>
		);
    }
    
    render() {
        return (
            <div className="section">
                {this.renderGallery()}
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                    preventScroll={this.props.preventScroll}
                    showThumbnails={this.props.showThumbnails}
                />
            </div>
        );
    }
}

Gallery.propTypes = {
	images: PropTypes.array,
	showThumbnails: PropTypes.bool
};
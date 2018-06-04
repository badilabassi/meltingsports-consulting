import React, { Component } from 'react';
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// material-ui components
import withStyles from 'material-ui/styles/withStyles';

// core components
import parallaxStyle from '../../jss/material-kit-react/components/parallaxStyle.jsx';

import './fade.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.imageRefs = [];
    this.width = 0;
    this.height = 0;
    this.timeout = null;
    this.imageContainer = null;
    this.getImageDim = this.getImageDim.bind(this);
  }

  componentWillMount() {
    this.timeout = setTimeout(
      () => this.fadeImages('next'),
      this.props.duration
    );
    this.setState({
      images: this.props.images.reverse()
    });
  }

  componentDidMount() {
    this.width = document.querySelector(
      '.react-slideshow-fade-wrapper'
    ).clientWidth;
    this.applyStyle();
    this.addResizeListener();
  }

  getImageDim() {
    this.height = this.imageContainer.children[0].clientHeight;
    // this.imageContainer.style.height = `${this.height}px`;
    this.imageContainer.style.height = 'inherit';
  }

  addResizeListener() {
    window.addEventListener('resize', () => {
      this.width = document.querySelector(
        '.react-slideshow-fade-wrapper'
      ).clientWidth;
      this.applyStyle();
    });
  }

  applyStyle() {
    this.imageRefs.forEach((eachImage, index) => {
      if (!!eachImage) {
        eachImage.style.width = `${this.width}px`;
      }
    });
  }

  render() {
    const { type, children, classes, className, small, filter } = this.props;
    const { images } = this.state;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined
    });

    return (
      <div id="hero" className={parallaxClasses}>
        <div className="react-slideshow-container">
          {/* <div className="nav" onClick={() => this.fadeImages('prev')}>
          {' '}
          &lt;{' '}
        </div> */}
          <div className={`react-slideshow-fade-wrapper ${type}`}>
            <div
              className="images-wrap"
              ref={wrap => (this.imageContainer = wrap)}
            >
              {images.map((each, key) => (
                <div
                  ref={el => {
                    this.imageRefs.push(el);
                  }}
                  onLoad={key === 0 ? this.getImageDim : null}
                  data-index={key}
                  key={key}
                  style={{
                    backgroundImage: `url(${each.file.url})`
                  }}
                >
                  <span />
                </div>
              ))}
            </div>
          </div>
          {/* <div className="nav" onClick={() => this.fadeImages('next')}>
          {' '}
          &gt;{' '}
        </div> */}
        </div>
        {children}
      </div>
    );
  }

  fadeImages(type) {
    let { images } = this.state;
    let newImageArr = [];
    clearTimeout(this.timeout);
    const lastImage = !!this.imageContainer
      ? this.imageContainer.children[images.length - 1]
      : null;
    if (type === 'prev') {
      newImageArr = images.slice(1);
      newImageArr.splice(newImageArr.length - 1, 0, images[0]);
      this.setState({ images: newImageArr });
      newImageArr = images.slice(1, images.length);
      newImageArr.splice(newImageArr.length, 0, images[0]);
    } else {
      newImageArr = [images[images.length - 1]].concat(
        images.slice(0, images.length - 1)
      );
    }
    lastImage.style.transition = `all ${this.props.transitionDuration / 1000}s`;
    lastImage.style.opacity = '0';
    setTimeout(() => {
      lastImage.style.opacity = '1';
      lastImage.style.transition = 'none';
      this.timeout = setTimeout(
        () => this.fadeImages('next'),
        this.props.duration
      );
      this.setState({ images: newImageArr });
    }, this.props.transitionDuration);
  }
}

Carousel.defaultProps = {
  duration: 5000,
  transitionDuration: 3000
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  duration: PropTypes.number,
  transitionDuration: PropTypes.number
};
export default withStyles(parallaxStyle)(Carousel);

import React from 'react';
import Parallax from './Parallax/Parallax.jsx';
import GridContainer from './Grid/GridContainer.jsx';
import GridItem from './Grid/GridItem.jsx';
import withStyles from 'material-ui/styles/withStyles';
import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx';

import classNames from 'classnames';
import parallaxStyle from '../jss/material-kit-react/components/parallaxStyle.jsx';

import Carousel from './Carousel';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currSeq: 0,
      images: this.props.image || [],
      background: this.props.image[0]
    };
    // this.backgroundSequence = this.backgroundSequence.bind(this);
  }

  // backgroundSequence() {
  //   !!window && window.clearTimeout();
  //   let k = 0;
  //   let secs = 5;
  //   for (let i = 0; i < this.state.images.length; i++) {
  //     setTimeout(() => {
  //       if (k + 1 === this.state.images.length) {
  //         setTimeout(() => {
  //           this.backgroundSequence();
  //         }, secs * 1000);
  //       } else {
  //         k++;
  //       }
  //     }, secs * 1000 * i);
  //   }
  // }

  // resetSeq() {
  //   this.setState({ currSeq: 0 });
  // }

  // updateBackground() {
  //   this.setState(prevState => ({
  //     currSeq: prevState.currSeq + 1
  //   }));

  //   if (this.state.currSeq > this.state.images.length - 1) {
  //     this.resetSeq();
  //   }

  //   console.log(this.state.currSeq);

  //   const background = this.state.images[this.state.currSeq];
  //   this.setState({ background });
  // }

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     this.updateBackground();
  //   }, 5000);
  //   // this.backgroundSequence();
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    const {
      classes = {},
      title = '',
      description = '',
      image = null
    } = this.props;

    // const parallaxClasses = classNames({
    //   [classes.parallax]: true,
    //   [classes.filter]: true,
    //   [classes.small]: false
    // });

    return (
      <Carousel filter images={image}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <h1 className={classes.title}>{title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: description.markdown.html }}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Carousel>
    );
  }
}

export default withStyles(landingPageStyle)(Hero);

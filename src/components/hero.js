import React from 'react';
import Parallax from './Parallax/Parallax.jsx';
import GridContainer from './Grid/GridContainer.jsx';
import GridItem from './Grid/GridItem.jsx';
import withStyles from 'material-ui/styles/withStyles';
import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.image || [],
      background: this.props.image[0]
    };
    this.backgroundSequence = this.backgroundSequence.bind(this);
  }

  backgroundSequence() {
    !!window && window.clearTimeout();
    let k = 0;
    let secs = 5;
    for (let i = 0; i < this.state.images.length; i++) {
      setTimeout(
        function() {
          !!this.state.images &&
            this.setState({ background: this.state.images[k] });

          if (k + 1 === this.state.images.length) {
            setTimeout(
              function() {
                this.backgroundSequence();
              }.bind(this),
              secs * 1000
            );
          } else {
            k++;
          }
        }.bind(this),
        secs * 1000 * i
      );
    }
  }

  componentDidMount() {
    this.backgroundSequence();
  }

  componentWillUnmount() {
    window.clearTimeout();
  }

  render() {
    const {
      classes = {},
      title = '',
      description = '',
      image = null
    } = this.props;

    return (
      <Parallax filter image={this.state.background.resolutions.src}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <h1 className={classes.title}>{title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: description.markdown.html }}
              />
              {/* <h4>{description.description}</h4> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    );
  }
}

export default withStyles(landingPageStyle)(Hero);

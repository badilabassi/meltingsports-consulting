import React from 'react';
import GridItem from '../Grid/GridItem.jsx';
import Card from '../Card/Card.jsx';
import CardBody from '../Card/CardBody.jsx';
import CardFooter from '../Card/CardFooter.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/fontawesome-free-brands';

const Profile = ({
  classes,
  imageClasses,
  image,
  name,
  linkedInLink,
  summary,
  position
}) => (
  <GridItem xs={12} sm={12} md={4}>
    <Card plain>
      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
        {!!image && (
          <img
            src={image.resolutions.src}
            srcSet={image.resolutions.srcSet}
            alt={name}
            className={imageClasses}
          />
        )}
      </GridItem>
      <h4 className={classes.cardTitle}>
        {name}
        <br />
        <small className={classes.smallTitle}>{position}</small>
      </h4>
      {!!(linkedInLink !== '/') && (
        <a
          className={`${classes.button} ${classes.linkedInButton} ${
            classes['white']
          } `}
          href={linkedInLink}
          target="__blank"
        >
          <FontAwesomeIcon
            className={`${classes.socials} ${classes.linkedIn}`}
            icon={faLinkedinIn}
          />
        </a>
      )}
      <CardBody>
        <div
          className={classes.description}
          dangerouslySetInnerHTML={{
            __html: summary.markdown.html
          }}
        />
      </CardBody>
    </Card>
  </GridItem>
);

export default Profile;

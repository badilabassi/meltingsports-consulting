import { container, title } from '../../material-kit-react.jsx'

const landingPageStyle = {
  container: {
    zIndex: '1',
    color: '#FFFFFF',
    ...container
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  aboutTitle: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
    color: '#222',
    textAlign: 'center'
  },
  aboutDescription: {
    color: '#333',
    "& > h2": {
      fontWeight: 'bold',
      color: '#3C4858'
    }
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0'
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  staticHeroContainer: {
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundBlendMode: 'darken',
    "&:after": {
      position: "absolute",
      zIndex: "-1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      bottom: 0,
      content: "''",
      backgroundColor: '#1D2844',
    },
  },
  staticHero: {
    ...container,
    height: '80vh',
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundBlendMode: 'darken',
    "@media screen and (min-width: 768px)": {
      height: '40vh',
    },
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    }
  },
  genericTitle: {
    ...title,
    minHeight: '32px',
    textAlign: 'center',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontSize: 35,
    lineHeight: '54px'
  },
  section: {
    padding: '25px 0 70px'
  },
  // mainRaised: {
  //   margin: "-60px 30px 0px",
  //   borderRadius: "6px",
  // boxShadow:
  //   "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  // }
}

export default landingPageStyle

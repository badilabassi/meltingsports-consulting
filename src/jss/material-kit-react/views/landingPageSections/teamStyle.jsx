import { cardTitle, title } from '../../../material-kit-react.jsx';
import imagesStyle from '../../imagesStyles.jsx';
import iconButtonStyle from '../../components/iconButtonStyle';
import {
  grayColor,
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from '../../../material-kit-react.jsx';

const teamStyle = {
  ...iconButtonStyle,
  section: {
    padding: '70px 0',
    textAlign: 'center'
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none'
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cardTitle,
  smallTitle: {
    color: '#6c757d'
  },
  description: {
    color: '#333',
    lineHeight: '1.5',
    fontSize: '.9rem',
    textAlign: 'left'
  },
  justifyCenter: {
    justifyContent: 'center !important'
  },
  socials: {
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
    color: '#999'
  },
  linkedInButton: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  linkedIn: {
    color: '#0073b1',
    '&:hover,&:focus': {
      color: '#0073b1',
      borderRadius: '50%',
      boxShadow:
        '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
    }
  },
  margin5: {
    margin: '5px'
  },
  projectTitle: {
    lineHeight: '1.5',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  projectDescription: {
    lineHeight: '1.5',
    fontSize: '1rem',
    color: '#fff',
    textAlign: 'center'
  }
};

export default teamStyle;

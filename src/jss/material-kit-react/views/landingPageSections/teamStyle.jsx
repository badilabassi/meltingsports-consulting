import { cardTitle, title } from '../../../material-kit-react.jsx'
import imagesStyle from '../../imagesStyles.jsx'

const teamStyle = {
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
  margin5: {
    margin: '5px'
  },
  projectTitle: {
    lineHeight: '1.5',
    fontSize: '1.125rem',
    fontWeight: "bold",
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
}

export default teamStyle

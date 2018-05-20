import React, {Component, Fragment} from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
import emergence from 'emergence.js'
import 'animate.css/animate.css'
import "../styles/main.scss"

import Nav from '../components/nav'
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";

const propTypes = {
  children: PropTypes.func.isRequired,
}

class DefaultLayout extends Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const {
      location,
      children, ...rest
    } = this.props

    const dashboardRoutes = [];

    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Melting Sports Consulting"
          rightLinks={<HeaderLinks />}
          fixed
          defaultColor="white"
          alternateColor="#0b3e79"
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        {children()}
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout

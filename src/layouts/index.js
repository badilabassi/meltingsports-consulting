import React from "react"
import * as PropTypes from "prop-types"
import emergence from 'emergence.js'

import 'animate.css/animate.css'
import "../styles/main.scss"

import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";

const propTypes = {
  children: PropTypes.func.isRequired,
}

class DefaultLayout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const {
      children
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
        />
        {children()}
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout

import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class HeroTemplate extends React.Component {
  render() {
    const hero = this.props.data.contentfulHero
    const {
      title: { title },
      description,
      image,
    } = hero
    const iconImg = icon.resolutions
    return (
      <div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            marginBottom: rhythm(1 / 2),
          }}
        >
          <Img
            style={{
              height: iconImg.height,
              width: iconImg.width,
              marginRight: rhythm(1 / 2),
            }}
            resolutions={iconImg}
          />
          <h4 style={{ marginBottom: 0 }}>{title}</h4>
        </div>
        <h1>{title}</h1>
        <div>
          <span>Products</span>
          <ul>
            {product &&
              product.map((p, i) => (
                <li key={i}>
                  <Link to={`/products/${p.id}`}>
                    {p.productName.productName}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

HeroTemplate.propTypes = propTypes

export default HeroTemplate

export const heroQuery = graphql`
  query heroQuery {
    contentfulHero {
      title
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
`

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

export default class Lightbox2 extends Component {
  static propTypes = {
    imagesIndex: PropTypes.array.isRequired,
  }

  render() {
    const { imagesIndex } = this.props;
    return (
        <div className="grid-3">
          
        {imagesIndex.map(image => (
          <div key={image.node.childImageSharp.fluid.src} className="location-listing">
            <div className="location-title"><span role="img" aria-label="emoji" className="description-img">✋💜📷</span></div>
            <div className="location-image">
              <div id="container-img">
              <Img
                className="location-image"
                key={image.node.childImageSharp.fluid.src}
                fluid={image.node.childImageSharp.fluid}
                alt="Contient un ou plusieures personnes photographiées par Walid Khaladi" />
              </div>
              </div>
          </div>
        ))}
        </div>
    )
  }
}





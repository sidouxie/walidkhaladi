import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Lightbox2 from './lightbox2';

const PortraitImages = () => (
  <StaticQuery
    query={graphql`
      query {
        imagesIndex: allFile(filter: {sourceInstanceName: { eq: "images-portrait" }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth:2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox2 key={data.imagesIndex.id} imagesIndex={data.imagesIndex.edges} />}
  />
);
export default PortraitImages;
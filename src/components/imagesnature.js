import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Lightbox3 from './lightbox3';

const NatureImages = () => (
  <StaticQuery
    query={graphql`
      query {
        imagesIndex: allFile(filter: {sourceInstanceName: { eq: "images-nature" }}) {
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
    render={data => <Lightbox3 key={data.imagesIndex.id} imagesIndex={data.imagesIndex.edges} />}
  />
);
export default NatureImages;
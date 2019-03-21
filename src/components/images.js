import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Lightbox from './lightbox';

const Images = () => (
  <StaticQuery
    query={graphql`
      query {
        imagesIndex: allFile(filter: {sourceInstanceName: { eq: "images-index" }}) {
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
    render={data => <Lightbox key={data.imagesIndex.id} imagesIndex={data.imagesIndex.edges} />}
  />
);
export default Images;
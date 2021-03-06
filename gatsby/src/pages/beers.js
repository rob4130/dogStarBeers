import { graphql } from 'gatsby';
import React from 'react';
import BeerList from '../components/BeerList';
import SEO from '../components/SEO';

// 2. pop in here via destructuring  data out of props
export default function BeersPage({ data }) {
  const beers = data.beers.nodes;
  return (
    <div className="PageTop">
      <SEO title="Beers" />
      <div />
      <p className="outLineBox">Rendering Out From Graphql</p>
      <p className="blurb">
        As part of the build process Gatsby pulls out all the required data from
        the CMS and loads into graphql. This page's components{' '}
        <span className="mark"> query graphql</span>, map over and render out
        the beers in the resulting list.
      </p>
      {/* 3. create a component to list the content, pass it all the beers and stick it in here */}
      <BeerList beers={beers} />
    </div>
  );
}

// 1. get your data from here
export const query = graphql`
  query BeerQuery {
    beers: allSanityDogbeers {
      nodes {
        name
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  background: var(--white);
  margin: 1rem 1rem;
  color: var(--black);
`;

const SiteBorderStyles = styled.div`
  color: var(--white);
  border: 2rem solid;
  background-size: 1500px;
  @media (max-width: 1100px) {
    margin-left: 0.2rem;
    margin-right: 1.5rem;
  }
  @media (max-width: 500px) {
    margin: -2rem;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          <p>{children}</p>
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}

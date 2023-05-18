import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Components/Layout';
import styled from 'styled-components';

const MediaSection = styled.section`
  width: 50vh;
  height: 100%;
  display: flex;
`;
const Main = styled.main`
  display: flex;
  flex-direction: row;
  gap: 100px;
  padding: 0 20px;
`;

const InfoSection = styled.section`
  width: 50vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const query = graphql`
  query ($path: String) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          path
        }
      }
    }
  }
`;

const PageTemplate = ({ data, pageContext }) => {
  const pathUrl = data.allSitePage?.edges[0].node.path;
  const productData = pageContext.product;
  return (
    <Layout>
      <Main>
        <MediaSection>
          <img src={productData?.url}></img>
        </MediaSection>
        <InfoSection>
          <h1>{pathUrl}</h1>
          <h3>{productData.title}</h3>
        </InfoSection>
      </Main>
    </Layout>
  );
};

export default PageTemplate;
// http://localhost:8000/page/image/https://via.placeholder.com/600/71d928/

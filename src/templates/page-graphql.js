import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PageContent from '../components/Section';

export const query = graphql`
  query ($id: String!) {
    contentstackPage(id: { eq: $id }) {
      url
      id
      page_components {
        hero_banner {
          banner_image {
            url
          }
          banner_title
          banner_description
        }
      }
    }
  }
`;

const PageTemplate = ({ data: { contentstackPage } }) => {
  const hero_banner = contentstackPage?.page_components[0]?.hero_banner;
  return (
    <Layout>
      {!hero_banner ? null : (
        <PageContent contentstackPage={contentstackPage}/>
      )}
    </Layout>
  );
};

export default PageTemplate;

import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../Components/Layout';
import PageContent from '../Components/Section';

const PageTemplate = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `);
  //   const hero_banner = contentstackPage?.page_components[0]?.hero_banner;

  return (
    <Layout>
      <img src={pageContext?.url}></img>

      <ul style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '500px', width: '500px', overflow: 'auto', padding: '50px'}}>
        {data.allSitePage.edges.map(elem => {
            return (
                <li><Link to={elem.node.path}>{elem.node.path}</Link></li>
            )
        })}
      </ul>
      {/* {!hero_banner ? null : (
        <PageContent contentstackPage={contentstackPage}/>
      )} */}
    </Layout>
  );
};

export default PageTemplate;
// http://localhost:8000/page/image/https://via.placeholder.com/600/71d928/

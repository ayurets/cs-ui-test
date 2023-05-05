import React from 'react';
import styled from 'styled-components';

const Page = styled.section`
  padding: 50px;
  border: solid 2px black;
`;

const PageContent = ({ contentstackPage }) => {
  const { url, page_components } = contentstackPage;
  const banner = page_components[0].hero_banner;
  return (
    <Page>
      <h1>{url}</h1>
      <div>
        <img src={`${banner?.banner_image?.url}`} alt='banner' />
        <h3>{banner?.banner_title}</h3>
        <p>{banner?.banner_description}</p>
      </div>
    </Page>
  );
};

export default PageContent;

import * as React from 'react';
import Layout from '../Components/Layout';
import styled from 'styled-components';


const Main = styled.main`
  flex-basis: 80%;
  height: 70vh;
  background-color: #707070;
  border-radius: 15px;
`
const Aside = styled.aside`
  flex-basis: 20%;
  height: 70vh;
  background-color: #e51937;
  border-radius: 15px;
`

const IndexPage = () => {
  return (
    <Layout>
        <Aside></Aside>
        <Main></Main>
    </Layout>
  );
};

export default IndexPage;


import React from 'react';
import { Link} from 'gatsby';
import Layout from '../Components/Layout';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  gap: 100px;
  padding: 0 20px;
`;

const CategoryList = styled.ul`
  height: 900px;
  overflow: auto;
  display: grid;
  padding: 40px;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const ListItem = styled.li`
  height: 400px;
  width: 250px;
  border: solid 1px black;
  border-radius: 10px;
  background-color: lightgrey;
  padding: 30px;
  list-style: none;
`;
const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PageTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <Main>
        <CategoryList>
          {pageContext.products.map((elem) => {
            return (
              <ListItem key={elem.url}>
                <Link to={`/page/image/${elem.url}`}>
                  <ListItemContent>
                    <img src={elem.url} height={'200px'} width={'200px'}></img>
                    {elem.title}
                  </ListItemContent>
                </Link>
              </ListItem>
            );
          })}
        </CategoryList>
      </Main>
    </Layout>
  );
};

export default PageTemplate;
// http://localhost:8000/page/image/https://via.placeholder.com/600/71d928/

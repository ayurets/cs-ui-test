exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const contentstackPagesData = await graphql(`
    query MyQuery {
      allContentstackPage {
        edges {
          node {
            url
            id
          }
        }
      }
    }
  `);

  if (contentstackPagesData.error) {
    console.error('Something went wrong!');
    return;
  }

  contentstackPagesData.data.allContentstackPage.edges.forEach((edge) => {
    const pageData = edge.node;
    createPage({
        path: `/page${pageData.url}/`,
        component: require.resolve("./src/templates/page-graphql.js"),
        context: {
            id: pageData.id,
        }
    })
  });
};

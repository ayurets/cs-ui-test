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

  const dummyData = await fetch('https://jsonplaceholder.typicode.com/photos').then(
    (res) => res.json()
  );

  if (contentstackPagesData.error) {
    console.error('Something went wrong!');
    return;
  }

  dummyData.forEach((elem, idx) => {
    createPage({
      path: `/page/image/${elem.url}`,
      component: require.resolve('./src/templates/page-images.js'),
      context: {
        product: elem,
      },
    });
  });

  createPage({
    path: `/page/category`,
    component: require.resolve('./src/templates/page-category.js'),
    context: {
      products: dummyData.slice(0, 500),
    },
  });

  contentstackPagesData.data.allContentstackPage.edges.forEach((edge, idx) => {
    const pageData = edge.node;

    createPage({
      path: `/page${pageData.url}/`,
      component: require.resolve('./src/templates/page-graphql.js'),
      context: {
        id: pageData.id,
      },
      defer: false,
    });
  });
};

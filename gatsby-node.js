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

  const res = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())

  if (contentstackPagesData.error) {
    console.error('Something went wrong!');
    return;
  }

  res.forEach(elem => {
    createPage({
      path: `/page/image/${elem.url}`,
      component: require.resolve("./src/templates/page-images.js"),
      context: {
        url: elem.url
      }
    })
  })

  // contentstackPagesData.data.allContentstackPage.edges.forEach((edge) => {
  //   const pageData = edge.node;
  //   createPage({
  //       path: `/page${pageData.url}/`,
  //       component: require.resolve("./src/templates/page-graphql.js"),
  //       context: {
  //           id: pageData.id,
  //       }
  //   })
  // });
};

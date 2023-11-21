const redirects = require("./redirects");

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;
  // Redirects
  redirects.forEach((redirect) => {
    createRedirect({
      fromPath: redirect.from,
      toPath: redirect.to,
      redirectInBrowser: true,
      isPermanent: true,
    });
  });
  
};

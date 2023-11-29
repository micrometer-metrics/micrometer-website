const redirects = require("./redirects");

exports.createPages = ({ actions}) => {
  const { createRedirect } = actions;
  // Redirects
  redirects.forEach((redirect) => {
    createRedirect({
      fromPath: redirect.from,
      toPath: redirect.to,
      redirectInBrowser: true,
    });
  });

};

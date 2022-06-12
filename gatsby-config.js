module.exports = {
  siteMetadata: {
    name: "RS Christiansen",
    description: "data and analytics",
    keywords: ["tech", "blog", "data", "analytics"],
    siteUrl: "rbchristiansen.com",
    siteImage: "terminal-open-graph-image.jpg",
    profileImage: ``,
    lang: `en`,
    config: {
      sidebarWidth: 280
    }
  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts"]
      }
    }
  ]
};

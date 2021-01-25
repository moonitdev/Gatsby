module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-google-sheets-flexible",
      options: {
          apiKey: "AIzaSyDmwMgEADYAZ0pNTI71M3CZx5wqCUzaDD0",
          spreadsheetUrl: "https://docs.google.com/spreadsheets/d/100PbplhMziDbU6fygezclb2wyWz6fmao-eR6LZ1Y4kk/edit#gid=0",
          tabName: "gallery",
          cellRange: "A1:E5",
          majorDimension: "COLUMNS",
      },
    },
    {
      resolve: 'gatsby-source-google-sheets-flexible',
      options: {
          apiKey: "AIzaSyDmwMgEADYAZ0pNTI71M3CZx5wqCUzaDD0",
          spreadsheetId: "100PbplhMziDbU6fygezclb2wyWz6fmao-eR6LZ1Y4kk",
          tabName: "covid",
          cellRange: "A1:BB57",
          majorDimension: "ROWS",
      }
    },
    {
      resolve: 'gatsby-source-google-sheets-flexible',
      options: {
          apiKey: "AIzaSyDmwMgEADYAZ0pNTI71M3CZx5wqCUzaDD0",
          spreadsheetId: "1DCzEY81t7AsU_nRkDZTctdHfEqufJz-59Vt2lXlUFjQ",
          tabName: "upbit",
          // cellRange: "A1:BB57",
          // majorDimension: "ROWS",
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

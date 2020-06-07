module.exports = () => ({
  siteMetadata: {
    title: `AwesomeBlog`,
    description: `Full stack web engineer.`,
    author: `@achilleskal`,
  },
  plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `${__dirname}/src/data`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          typeName: 'Post'
        }
      },
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `open sans pro\:300,400,700` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      }
  ]
})

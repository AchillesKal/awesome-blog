import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout';
import Image from '../components/image';
import ModeSwitcher from '../components/modeSwitcher';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  
  return (
    <Layout>
      <div style={{width: `25%`}}>
        <Image />
        <ModeSwitcher />
      </div>
      <div style={{width: `75%`, paddingLeft: `5rem`}}>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
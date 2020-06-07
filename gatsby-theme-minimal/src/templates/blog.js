import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from "styled-components";

import Layout from '../components/layout';
import PostList from '../components/post-list';
import Image from '../components/image';
import ModeSwitcher from '../components/modeSwitcher';

const BlogTitle = styled.div`
  letter-spacing: -.05em;
  font-size: 3rem;
  margin-bottom: .25rem;
  font-weight: 700;
  line-height: 1.5;
`;

const BlogTemplate = () => {
  
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            slug
            date
            summary
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div style={{width: `25%`}}>
        <Image />
        <ModeSwitcher />
      </div>
      <div style={{width: `75%`, paddingLeft: `5rem`}}>
        <BlogTitle>Blog</BlogTitle>
        <hr className="mb-4"></hr>
        <PostList posts={posts} />
      </div>
    </Layout>
  );
}

export default BlogTemplate;
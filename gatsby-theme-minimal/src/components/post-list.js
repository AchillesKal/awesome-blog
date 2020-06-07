import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";

/** @jsx jsx */
import { jsx } from "theme-ui";

const BlogListTitle = styled(Link)`
    letter-spacing: -.05em;
    font-size: 1.875rem;
    margin-bottom: .5rem;
    font-weight: 700;
`;

const ReadMoreLink = styled(Link)`
    border: 0 solid #e2e8f0;
    color: #fff;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-weight: 700;
    border-bottom-width: 4px;
    border-radius: .25rem;

    :hover{
        border-color: #4299e1;
        background-color: #63b3ed;
    }
`;

const BlogListItem = styled.div`
    margin-bottom: 2rem;
`;

const BlogListDate = styled.div`
    margin-bottom: .5rem;
`;

const BlogListSum = styled.div`
    margin-bottom: 1.5rem;
`;

const PostList = ({ posts }) => (
    <>
        { 
            posts.map(post => (
                <div key={post.id}>
                    <BlogListItem key={post.id}>
                        <BlogListTitle className="blog-list-title" to={post.frontmatter.slug}>
                            {post.frontmatter.title}
                        </BlogListTitle>
                        <BlogListDate>
                            Posted on: {post.frontmatter.date}
                        </BlogListDate>
                        <BlogListSum>
                            {post.frontmatter.summary}
                        </BlogListSum>
                        <ReadMoreLink
                            sx={{
                                backgroundColor: "primary",
                                borderColor: "secondary"
                            }}
                         to={post.frontmatter.slug}>Read more</ReadMoreLink>
                    </BlogListItem>
                    <hr className="mb-4"></hr>
                </div>
            )) 
        }
    </>
)

export default PostList;
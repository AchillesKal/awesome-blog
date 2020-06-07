import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Link } from 'gatsby';
import styled from "styled-components";

import Menu from './menu';

const LayoutContainer = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding: 1.45rem 1.0875rem;
    justify-content: space-between;
    display: flex;
    line-height: 1.5;
`;
const LayoutHeader = styled.header`
    margin-bottom: 1.45rem;
    border-bottom: 1px solid #e0e7ea;
`;

const Brand = styled.span`
    letter-spacing: -.05em;
    font-size: 1.5rem;
    font-weight: 700;
}
`

const Header = () => {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <LayoutHeader className="main-menu">
            <LayoutContainer>
                <Brand>
                    <Link to='/'>{data.site.siteMetadata.title}</Link>
                </Brand>
                <Menu />
            </LayoutContainer>
        </LayoutHeader>
    );
}

export default Header;
import React from 'react';
import styled from "styled-components";

const FooterSection = styled.footer`
    background-color: #333;
    line-height: 2.5rem;
    text-align: center;
    color: #FFF;
`;

const Footer = () => {
    return (
        <FooterSection className="footer">
            This is the footer
        </FooterSection>
    );
}

export default Footer;
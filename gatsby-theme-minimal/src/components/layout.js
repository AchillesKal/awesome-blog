import React, { useContext } from "react";
import styled from "styled-components";
import {Helmet} from "react-helmet";

import Header from './header';
import Footer from './footer';
import {
    GlobalStateContext,
} from "../context/GlobalContextProvider";

const MainIntro = styled.div`
    margin: 0px auto;
    max-width: 1000px;
    padding: 0px 1.0875rem 1.45rem;
    min-height: 80vh;
    display: flex;
`;


const Layout = ({ children }) => {
    const state = useContext(GlobalStateContext);

    return (
        <div className={`layout`}>
            <Helmet>
                <body className={`theme-${state.theme}`} />
            </Helmet>
            <Header />
            <MainIntro>
                {children}
            </MainIntro>
            <Footer />
        </div>  
    )
}


export default Layout;
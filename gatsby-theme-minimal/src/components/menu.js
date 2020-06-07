import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";

const MainMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    justify-content: center;
    flex-direction: column;

    ul {
        list-style: none;
        display: flex;

        li{
            margin-left: 1.5rem;
        }
    }
`;

const Menu = () => {

    return (
        <MainMenu className="">
            <ul className="">
                <li className="">
                    <Link to='/'>Home</Link>
                </li>
                <li className="">
                    <Link to='/blog'>Blog</Link>
                </li>
            </ul>
        </MainMenu>
    );
}

export default Menu;
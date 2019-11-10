import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import globals from '../globals';

const { flex, noSelect } = globals;

const Button = styled.div`
    ${noSelect}
    ${flex('center', 'center')};
    width: auto;
    height: auto;
    padding: 1.2rem;
    color: white;
    background: #26201d;
    border: none;
    &:hover {
        color: white;
        background: #26201d;
        cursor: pointer;
    }
    &.currentPage {
        color: white;
        background: black;
    }
    @media only screen and (max-width: 400px) {
        font-size: 0.8rem;
        padding: 1rem;
    }
`;

const NavLink = styled(Link)`
    @media only screen and (max-width: 400px) {
        width: 33.333%;
        text-align: center;
    }
`;

const NavButton = ({ btnText, link }) => {
    const page = window.location.pathname;
    return (
        <>
            <NavLink to={link} className="noUnderline">
                <Button className={link === page && 'currentPage'}>{btnText}</Button>
            </NavLink>
        </>
    );
};

export default NavButton;

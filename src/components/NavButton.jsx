import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import globals from '../globals';

const { flex, noSelect } = globals;

const Button = styled.div`
    ${noSelect}
    ${flex('center', 'center')}
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
`;

const NavButton = ({ btnText, link }) => {
    const page = window.location.pathname;
    return (
        <>
            <Link to={link} className="noUnderline">
                <Button className={link === page && 'currentPage'}>{btnText}</Button>
            </Link>
        </>
    );
};

export default NavButton;

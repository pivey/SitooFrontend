import React from 'react';
import styled from 'styled-components';
import SitooLogo from '../assets/sitooLogo.png';
import globals from '../globals';

const { flex } = globals;

const Nav = styled.div`
    ${flex('flex-start', 'center')}
    height: auto;
    width: 100%;
    background: #e1e5e8;
`;

const Logo = styled.img`
    height: 3rem;
    width: 8rem;
    background: #e1e5e8;
`;

const LogoNav = () => {
    const peter = 'working';
    return (
        <>
            <Nav>
                <Logo src={SitooLogo} />
            </Nav>
        </>
    );
};

export default LogoNav;

import React from 'react';
import styled from 'styled-components';
import globals from '../globals';
import NavButtons from './NavButton';

const { flex } = globals;

const NavHolder = styled.div`
    ${flex('flex-start', 'center')}
    width: 100%;
    height: auto;
    background: #26201d;
`;

const navInputs = [
    { text: 'Users', route: '/' },
    { text: 'Products', route: '/Products' },
    { text: 'Manufacturers', route: '/Manufacturers' }
];

const NavBar = () => {
    const peter = 'working';
    return (
        <NavHolder>
            {navInputs.map((e, i) => (
                <NavButtons key={i} link={e.route} btnText={e.text} />
            ))}
        </NavHolder>
    );
};

export default NavBar;

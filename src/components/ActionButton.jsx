import React from 'react';
import styled from 'styled-components';
import globals from '../globals';

const { flex, noSelect, btnFocus } = globals;

const FooterBtn = styled.button`
    ${noSelect}
    ${btnFocus}
    ${flex('space-between', 'center')}
    width: auto;
    height: auto;
    font-weight: bold;
    border-radius: 10px;
    font-size:.8rem;
    background: ${({ color }) => color};
    padding: .5rem;
    color: white;
    border:2px solid transparent;
    &:hover{
        border:2px solid white;
        cursor:pointer;
    }
`;

const ActionBtn = ({ color, name, deleter, adder, editer }) => {
    const peter = 'working';
    return (
        <>
            <FooterBtn
                onClick={name === 'Add User' ? adder : name === 'Delete Selected' ? deleter : editer}
                type="button"
                color={color}
            >
                {name}
            </FooterBtn>
        </>
    );
};

export { FooterBtn };

export default ActionBtn;

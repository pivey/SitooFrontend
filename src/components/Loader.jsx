import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const StyledLoader = styled(ReactLoading)`
    margin-top: -12rem;
    margin-left: 4rem;
    @media only screen and (max-width: 400px) {
        margin-left: 2rem;
        margin-top: -9rem;
    }
`;

const Loader = ({ type, color }) => <StyledLoader type={type} color={color} height="15%" width="15%" />;

export default Loader;

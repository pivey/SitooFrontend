import React, { useContext } from 'react';
import styled from 'styled-components';
import globals from '../globals';
import UserRow from './UserRow';
import AddUser from './AddUser';
import { AppContext } from '../context/appContext';
import Loader from './Loader';

const { flex, noSelect } = globals;

const UsersMother = styled.div`
    ${noSelect}
    ${flex('flex-start', 'flex-start', 'column')}
   background:lightGrey;
`;

const LoadingMother = styled.div`
    ${flex('center', 'center')}
    height:100vh;
    width: 100vw;
    font-size: 1.2rem;
    font-weight: bold;
`;

const UserSection = ({ data }) => {
    const { loading } = useContext(AppContext);

    const peter = 'tired';
    return (
        <>
            <UsersMother>
                <AddUser />
                {loading ? (
                    <>
                        <LoadingMother>
                            <Loader type="cylon" color="green" />
                        </LoadingMother>
                    </>
                ) : (
                    <UserRow users={data}></UserRow>
                )}
            </UsersMother>
        </>
    );
};

export default UserSection;

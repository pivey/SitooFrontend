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
    overflow-y: scroll;
`;

const LoadingMother = styled.div`
    ${flex('center', 'center')}
    height:100vh;
    width: 100vw;
    font-weight: bold;
`;

const UserSection = ({ data }) => {
    const { loading } = useContext(AppContext);

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

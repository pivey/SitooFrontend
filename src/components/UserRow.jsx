import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import globals from '../globals';
import { AppContext } from '../context/appContext';

const { flex, noSelect, copyCat } = globals;

const Row = styled.div`
    ${flex('flex-start', 'center')}
    height: auto;
    width: 100%;
    background: white;
    padding: 1.1rem 0rem;
    border-bottom: 0.5px solid lightGrey;
`;

const TitleRow = styled(Row)`
    border-top: 1px solid grey;
    border-bottom: 1px solid lightGrey;
    background: #e1e5e8;
`;

const RowEl = styled.div`
    ${noSelect}
    font-size:1rem;
    height: auto;
    text-align: center;
    width: 25%;
    text-align: left;
    padding-left: 1rem;
`;

const RowTitle = styled(RowEl)`
    font-weight: bold;
    font-size: 1.1rem;
    margin-left: 1rem;
`;

const CheckUser = styled.input`
    padding: 0.2rem;
    margin-left: 1rem;
`;

const DateYear = styled.span`
    color: grey;
    opacity: 0.8;
    font-size: 0.85rem;
`;

const UserRow = ({ users }) => {
    const { deleteInfo, setDeleteInfo } = useContext(AppContext);

    let userList = null;
    const idArr = [];
    if (users) {
        userList = users;
        users.forEach(e => idArr.push(e.userid));
    }

    const checkHandle = ({ target: { checked, id } }) => {
        if (checked) {
            const deepCopy = copyCat(deleteInfo);
            deepCopy.items.push(id);
            setDeleteInfo(deepCopy);
        } else {
            const findClicked = deleteInfo.items.findIndex(e => e === id);
            const deepCopy = copyCat(deleteInfo);
            deepCopy.items.splice(findClicked, 1);
            setDeleteInfo(deepCopy);
        }
    };

    return (
        <>
            <TitleRow>
                <RowTitle>Name</RowTitle>
                <RowTitle>Email</RowTitle>
                <RowTitle>Date Created</RowTitle>
                <RowTitle>Date Modified</RowTitle>
            </TitleRow>
            {userList &&
                userList.map((e, i) => (
                    <Row key={i}>
                        <CheckUser onClick={checkHandle} id={e.userid} type="checkbox" />
                        <RowEl>
                            {e.namefirst} {e.namelast}
                        </RowEl>
                        <RowEl>{e.email}</RowEl>
                        <RowEl>
                            {moment.unix(e.datecreated).format(`Do MMM h:mm:ss a`)}
                            <DateYear>{moment.unix(e.datecreated).format(` (YYYY)`)}</DateYear>
                        </RowEl>
                        <RowEl>
                            {moment.unix(e.datemodified).format(`Do MMM h:mm:ss a`)}
                            <DateYear>{moment.unix(e.datemodified).format(` (YYYY)`)}</DateYear>
                        </RowEl>
                    </Row>
                ))}
        </>
    );
};

export { RowTitle, TitleRow, RowEl, Row, DateYear };

export default UserRow;

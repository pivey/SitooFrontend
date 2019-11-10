import React, { useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import globals from '../globals';
import { AppContext } from '../context/appContext';

const { flex, noSelect, copyCat, ellipsis } = globals;

const Row = styled.div`
    ${flex('space-around', 'center')}
    height: auto;
    width: 100%;
    background: white;
    padding: 1.1rem 0rem;
    border-bottom: 0.5px solid lightGrey;
    @media only screen and (max-width: 400px) {
        ${flex('flex-start', 'center')}
        padding: 0.2rem 0rem;
    }
`;

const TitleRow = styled(Row)`
    ${flex('flex-start', 'center')}
    border-top: 1px solid grey;
    border-bottom: 1px solid lightGrey;
    background: #e1e5e8;
    &.columnView {
        ${flex('space-evenly', 'flex-start', 'column')}
        background:transparent;
        height: 100%;
        width: auto;
        padding: 0;
        border-top: none;
        border-bottom: none;
    }
`;

const RowEl = styled.div`
    ${noSelect}
    font-size:1rem;
    height: 100%;
    text-align: center;
    width:25%
    text-align: left;
    padding-left: 1rem;
    ${ellipsis}
    @media only screen and (max-width: 400px) {
        font-size:.8rem;
        width: 100%;
        padding:0.2rem ;
        padding-left: 1rem;
    }
`;

const RowTitle = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
    margin-left: 1rem;
    padding-left: 2rem;
    width: 100%;
    @media only screen and (max-width: 400px) {
        font-size: 0.8em;
        padding: 0.2rem;
        padding-left: 0.5rem;
        margin-left: 0rem;
        width: 100%;
    }
`;

const CheckHolder = styled.div`
    width: auto;
    height: 100%;
    margin-left: 0.2rem;
`;

const CheckUser = styled.input`
    padding: 0.4rem;
    margin-left: 1rem;
    @media only screen and (max-width: 400px) {
        width: 30px;
        padding: 0.3rem;
        margin: 0px;
    }
`;

const DateYear = styled.span`
    color: grey;
    opacity: 0.8;
    font-size: 0.85rem;
    @media only screen and (max-width: 400px) {
        font-size: 0.6rem;
    }
`;

const ElHolder = styled.div`
    ${flex('space-evenly', 'flex-start', 'column')}
    height:100%;
    flex-grow: 1;
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
            {userList && window.innerWidth > 400 ? (
                <>
                    <TitleRow>
                        <RowTitle>Name</RowTitle>
                        <RowTitle>Email</RowTitle>
                        <RowTitle>Created</RowTitle>
                        <RowTitle>Modified</RowTitle>
                    </TitleRow>
                    {userList.map((e, i) => (
                        <Row key={i}>
                            <CheckUser onClick={checkHandle} id={e.userid} type="checkbox" />
                            <RowEl>
                                {e.namefirst} {e.namelast}
                            </RowEl>
                            <RowEl>{e.email}</RowEl>
                            <RowEl>
                                {moment.unix(e.datecreated).format(`Do MMM h:mma`)}
                                <DateYear>{moment.unix(e.datecreated).format(` (YYYY)`)}</DateYear>
                            </RowEl>
                            <RowEl>
                                {moment.unix(e.datemodified).format(`Do MMM h:mma`)}
                                <DateYear>{moment.unix(e.datemodified).format(` (YYYY)`)}</DateYear>
                            </RowEl>
                        </Row>
                    ))}
                </>
            ) : (
                userList.map((e, i) => (
                    <Row key={i}>
                        <CheckHolder>
                            <CheckUser onClick={checkHandle} id={e.userid} type="checkbox" />
                        </CheckHolder>
                        <TitleRow className="columnView">
                            <RowTitle>Name</RowTitle>
                            <RowTitle>Email</RowTitle>
                            <RowTitle>Created</RowTitle>
                            <RowTitle>Modified</RowTitle>
                        </TitleRow>
                        <ElHolder>
                            <RowEl>
                                {e.namefirst} {e.namelast}
                            </RowEl>
                            <RowEl>{e.email}</RowEl>
                            <RowEl>
                                {moment.unix(e.datecreated).format(`Do MMM h:mma`)}
                                <DateYear>{moment.unix(e.datecreated).format(` (YYYY)`)}</DateYear>
                            </RowEl>
                            <RowEl>
                                {moment.unix(e.datemodified).format(`Do MMM h:mma`)}
                                <DateYear>{moment.unix(e.datemodified).format(` (YYYY)`)}</DateYear>
                            </RowEl>
                        </ElHolder>
                    </Row>
                ))
            )}
        </>
    );
};

export { RowTitle, TitleRow, RowEl, Row, DateYear };

export default UserRow;

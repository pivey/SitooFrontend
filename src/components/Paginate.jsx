/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext } from 'react';
import styled from 'styled-components';
import globals from '../globals';
import { AppContext } from '../context/appContext';

const { flex, noSelect } = globals;

const PageNav = styled.nav`
    ${flex('center', 'center')}
    background:transparent;
    width: 100vw;
    padding: 1.5rem;
    position: fixed;
    bottom: 3rem;
`;

const PageUL = styled.div`
    ${flex('center', 'center')}
    width: 5rem;
    margin-left: 2.5rem;
`;

const PageLI = styled.div`
    ${flex('center', 'center')}
`;

const PageBtn = styled.a`
    ${noSelect}
    ${flex('center', 'center')}
    background:white;
    color: black;
    width: auto;
    padding: 0.8rem 1rem;
    text-decoration: none;
    border: 0.5px solid lightGrey;

    &:hover {
        cursor: pointer;
        background: #3590f3;
        color: white;
    }
    &.selected {
        background: #3590f3;
        color: white;
    }
`;

const LastPageBtn = styled(PageBtn)`
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const FirstPageBtn = styled(PageBtn)`
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const backwards = '<<';
const forward = '>>';

const Paginate = ({ postsPerPage, totalPosts, paginate, firstPage, lastPage, currentPage }) => {
    const { loading } = useContext(AppContext);
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <PageNav>
                <PageUL>
                    {!loading && (
                        <>
                            <FirstPageBtn onClick={() => firstPage()}>{backwards}</FirstPageBtn>
                            {pageNumbers.map(num => (
                                <PageLI key={num}>
                                    <PageBtn
                                        onClick={() => paginate(num)}
                                        className={num === currentPage ? 'selected' : ''}
                                    >
                                        {num}
                                    </PageBtn>
                                </PageLI>
                            ))}
                            <LastPageBtn onClick={() => lastPage()}>{forward}</LastPageBtn>
                        </>
                    )}
                </PageUL>
            </PageNav>
        </>
    );
};

export default Paginate;

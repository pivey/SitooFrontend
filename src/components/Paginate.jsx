/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext } from 'react';
import styled from 'styled-components';
import globals from '../globals';
import { AppContext } from '../context/appContext';

const { flex, noSelect } = globals;

const PageNav = styled.nav`
    ${flex('center', 'center')}
    background:transparent;
    width: 100%;
    padding: 1.5rem;
    position: fixed;
    bottom: 3rem;
    @media only screen and (max-width: 400px) {
        font-size: 0.6rem;
        padding: 0.5rem;
    }
`;

const PageUL = styled.div`
    ${flex('center', 'center')}
    width: auto;
`;

const PageLI = styled.div`
    background: rgba(255, 255, 255, 0.7);
`;

const PageBtn = styled.a`
    ${noSelect}
    ${flex('center', 'center')}
    padding: 0.8rem 1rem;
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
    @media only screen and (max-width: 400px) {
        font-size: 0.6rem;
        padding: 0.6rem;
    }
    @media only screen and (max-width: 300px) {
        font-size: 0.4rem;
        padding: 0.4rem;
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
    );
};

export default Paginate;

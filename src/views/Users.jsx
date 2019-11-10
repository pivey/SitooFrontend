import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import NavBar from '../components/NavBar';
import LogoNav from '../components/LogoNav';
import UserSection from '../components/UserSection';
import Footer from '../components/Footer';
import { AppContext } from '../context/appContext';
import globals from '../globals';
import Paginate from '../components/Paginate';
import GeneralPopUp from '../components/GeneralPopUp';

const { authToken, baseURL } = globals;
const warning = {
    title: 'Delete User',
    content: 'are you sure you want to delete these users?',
    btnText: 'Delete User'
};
const created = {
    title: 'User Created',
    content: "You've just added a user"
};
const AppWrapper = styled.div`
    min-height: 100vh;
    max-height: auto;
    width: 100vw;
    background: white;
    overflow-y: scroll;
`;

const Users = () => {
    const { update, setLoading, posts, setPosts, setEditObj, openPopUp, setPopUpConfirm } = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            await Axios.get(`http://localhost:8088/${baseURL}sites/1/users.json?num=100`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${authToken}`,
                    ID: 90316 - 125,
                    password: 'pfX0Y7A2TYAlZ571IKEO7AKoXza6YlvsP8kKvAu3'
                }
            })
                .then(res => {
                    if (res !== null) {
                        setPosts(res.data.items);
                        setLoading(false);
                    }
                })
                .catch(error => console.log(error));
        };
        getPosts();
        setEditObj({ namefirst: '', namelast: '', email: '', title: 'Add User', btnText: 'Add User' });
        setPopUpConfirm(false);
    }, [update]);

    const lastIndex = currentPage * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;
    const currentPosts = posts.slice(firstIndex, lastIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const firstPage = () => setCurrentPage(1);
    const lastPage = () => setCurrentPage(Math.ceil(posts.length / postsPerPage) - 1);
    return (
        <>
            <AppWrapper>
                {openPopUp && <GeneralPopUp btns openStatus={openPopUp.deleteUser} message={warning} />}
                {openPopUp && <GeneralPopUp openStatus={openPopUp.addUser} message={created} />}
                <LogoNav />
                <NavBar />
                <UserSection data={currentPosts} />
                <Paginate
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                    firstPage={firstPage}
                    lastPage={lastPage}
                    currentPage={currentPage}
                />
            </AppWrapper>
            <Footer userBtns />
        </>
    );
};

export { AppWrapper };

export default Users;

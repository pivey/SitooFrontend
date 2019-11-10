import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import globals from '../globals';
import ActionBtn from './ActionButton';
import { AppContext } from '../context/appContext';

const { flex, noSelect, copyCat, authToken, baseURL } = globals;

const FooterMother = styled.div`
    ${noSelect}
    ${flex('space-between', 'center')}
    width: 100%;
    height: 3rem;
    background: #e1e5e8;
    padding: 1.5rem;
    position: fixed;
    bottom: 0;
    border: 1px solid grey;
`;

const Footer = ({ userBtns }) => {
    const {
        deleteInfo,
        setDeleteInfo,
        setUpdate,
        update,
        openAddUser,
        setOpenAddUser,
        posts,
        setEditObj,
        popUpConfirm,
        setPopUpConfirm,
        setOpenPopUp
    } = useContext(AppContext);

    const deleteHandle = () => {
        if (deleteInfo.items.length > 0) {
            setOpenPopUp({ addUser: false, deleteUser: true });
            if (popUpConfirm) {
                setOpenPopUp({ addUser: false, deleteUser: false });
                const deepCopy = copyCat(deleteInfo);
                for (let i = 0; i < deleteInfo.items.length; i++) {
                    Axios.delete(`http://localhost:8088/${baseURL}sites/1/users/${deleteInfo.items[i]}.json`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Basic ${authToken}`,
                            ID: 90316 - 125,
                            password: 'pfX0Y7A2TYAlZ571IKEO7AKoXza6YlvsP8kKvAu3'
                        }
                    })
                        .then(res => {
                            console.log(res);
                            deepCopy.items = [];
                            deepCopy.deleteUser = true;
                            setDeleteInfo(deepCopy);
                            // eslint-disable-next-line no-unused-expressions
                            update ? setUpdate(false) : setUpdate(true);
                        })
                        .catch(error => console.log(error));
                }
            }
        } else {
            console.log('nothing to delete');
        }
    };

    console.log(deleteInfo.items);

    const addHandle = () => {
        setEditObj({
            email: '',
            namefirst: '',
            namelast: '',
            title: 'Add User',
            btnText: 'Add User'
        });
        // eslint-disable-next-line no-unused-expressions
        openAddUser ? setOpenAddUser(false) : setOpenAddUser(true);
    };

    const editHandle = () => {
        if (deleteInfo.items.length > 0) {
            setOpenAddUser(true);
            const foundChecked = deleteInfo.items.map(e => posts.find(x => x.userid === e));
            console.log(foundChecked);
            setEditObj({
                email: foundChecked[0].email,
                namefirst: foundChecked[0].namefirst,
                namelast: foundChecked[0].namelast,
                title: 'Edit User',
                btnText: 'Edit User'
            });
        } else {
            console.log('nothing there');
        }
    };

    useEffect(() => {
        deleteHandle();
        const deepCopy = copyCat(deleteInfo);
        deepCopy.items = [];
        deepCopy.deleteUser = true;
    }, [popUpConfirm]);

    return (
        <FooterMother>
            {userBtns && (
                <>
                    <ActionBtn deleter={deleteHandle} color="#D81734" name="Delete Selected"></ActionBtn>
                    <ActionBtn editer={editHandle} color="#92C631" name="Edit User"></ActionBtn>
                    <ActionBtn adder={addHandle} color="#3590F3" name="Add User"></ActionBtn>
                </>
            )}
        </FooterMother>
    );
};

export default Footer;

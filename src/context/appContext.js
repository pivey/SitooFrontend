import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

function AppContextProvider({ children }) {
    const [deleteInfo, setDeleteInfo] = useState({ items: [], deleteUser: false });
    const [getRes, setGetRes] = useState(null);
    const [update, setUpdate] = useState(false);
    const [openAddUser, setOpenAddUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [openPopUp, setOpenPopUp] = useState({ addUser: false, deleteUser: false });
    const [popUpConfirm, setPopUpConfirm] = useState(false);
    const [editObj, setEditObj] = useState({
        namefirst: '',
        namelast: '',
        email: '',
        title: 'Add User',
        btnText: 'Add User'
    });
    const state = {
        deleteInfo,
        setDeleteInfo,
        getRes,
        setGetRes,
        update,
        setUpdate,
        openAddUser,
        setOpenAddUser,
        loading,
        setLoading,
        posts,
        setPosts,
        editObj,
        setEditObj,
        openPopUp,
        setOpenPopUp,
        popUpConfirm,
        setPopUpConfirm
    };

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export default AppContextProvider;

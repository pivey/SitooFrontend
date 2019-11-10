/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import globals from '../globals';
import { AppContext } from '../context/appContext';
import { FooterBtn } from './ActionButton';

const { flex, btnFocus, authToken, baseURL } = globals;

const Modal = styled.div`
    ${flex('center', 'center')}
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    visibility: ${({ display }) => (display ? 'visible' : 'hidden')};
    z-index: 999;
`;

const FormMother = styled.div`
    ${flex('flex-start', 'space-between', 'column')}
    border-radius:5px;
    height: 70%;
    width: 50%;
    padding: 2.5rem;
    padding-top: 3rem;
    padding-bottom: 0.5rem;
    background: #e1e5e8;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    margin-left: 1rem;
    z-index: 1000;
    visibility: ${({ display }) => (display ? 'visible' : 'hidden')};
    @media only screen and (max-width: 400px) {
        margin-left: 0rem;
        font-size: 0.6rem;
        padding: 1.5rem;
        height: 50%;
        width: 80%;
    }
`;

const SubmitBtn = styled(FooterBtn)`
    ${btnFocus}
    background: ${({ btnColor }) => btnColor};
`;

const Title = styled.div`
    height: auto;
    width: 100%;
    font-weight: bold;
    font-size: ${({ size }) => size || '12px'};
    text-align: ${({ align }) => align || 'left'};
    margin-bottom: ${({ margin }) => margin || '-1.5rem'};
    margin-left: ${({ marginLeft }) => marginLeft || '.5rem'};
    background: #e1e5e8;
    color: black;
    @media only screen and (max-width: 400px) {
        margin-bottom: ${({ margin }) => (margin = '1rem' || '-1.5rem')};
        font-size: ${({ size }) => (size = '1rem' || '0.8rem')};
        margin-left: ${({ marginLeft }) => (marginLeft = '0rem' || '.5rem')};
    }
`;

const StyledInput = styled.input`
    ${btnFocus}
    text-align: center;
    width: 100%;
    border-radius: 5px;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    margin-top: 0.1rem;
    margin-bottom: 1.6rem;
    position: relative;
    border: 0.5px solid lightGrey;
    top: 0;
    left: 0;
    @media only screen and (max-width: 400px) {
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
        padding: 0.8rem;
        margin-top: -1rem;
    }
`;

const StyledForm = styled.form`
    ${flex('space-around', 'center', 'column')}
    text-align: center;
    height: 100%;
    width: 100%;
`;

const ButtonHolder = styled.div`
    ${flex('space-between', 'center')}
    ${({ center }) => center && flex('center', 'center')}
    padding:0.5rem;
    height: auto;
    width: 100%;
    @media only screen and (max-width: 400px) {
        padding: 0rem;
    }
`;

const ErrorMsg = styled.div`
    width: 100%;
    color: red;
    padding: 0.5rem;
    padding-top: 0rem;
    font-size: 70%;
    text-align: center;
`;

const AddUser = ({ center }) => {
    const {
        openAddUser,
        setOpenAddUser,
        update,
        setUpdate,
        editObj,
        deleteInfo,
        setDeleteInfo,
        setOpenPopUp
    } = useContext(AppContext);

    const postSubmit = values => {
        fetch(`http://localhost:8088/${baseURL}sites/1/users.json`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${authToken}`,
                ID: 90316 - 125,
                password: 'pfX0Y7A2TYAlZ571IKEO7AKoXza6YlvsP8kKvAu3'
            },
            Accept: 'application/json',
            body: JSON.stringify(values)
        })
            .then(res => {
                console.log(res, '*** sitoo POST ***');
                setUpdate(true);
            })
            .catch(error => console.log(error));
    };

    const formReset = key => {
        key.namefirst = '';
        key.namelast = '';
        key.email = '';
        setOpenAddUser(false);
        setDeleteInfo({ items: [], deleteUser: false });
    };

    const updateApp = () => {
        update ? setUpdate(false) : setUpdate(true);
    };

    const updateUser = values => {
        fetch(`http://localhost:8088/${baseURL}sites/1/users/${deleteInfo.items[0]}.json`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${authToken}`,
                ID: 90316 - 125,
                password: 'pfX0Y7A2TYAlZ571IKEO7AKoXza6YlvsP8kKvAu3'
            },
            Accept: 'application/json',
            body: JSON.stringify({ ...values })
        })
            .then(res => {
                formReset(values);
                setUpdate(true);
            })
            .catch(error => console.log(error));
    };

    return (
        <Modal display={openAddUser}>
            <FormMother display={openAddUser}>
                <Title size="1.5rem" align="center" margin="1rem">
                    {editObj.title}
                </Title>
                <Formik
                    enableReinitialize
                    initialValues={{ namefirst: editObj.namefirst, namelast: editObj.namelast, email: editObj.email }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={values => {
                        console.log('submitting values', values);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                        <>
                            <StyledForm onSubmit={handleSubmit}>
                                <Title>First Name</Title>
                                <StyledInput
                                    type="text" //
                                    name="namefirst" //
                                    onChange={handleChange} //
                                    placeholder={values.namefirst}
                                    value={values.namefirst}
                                />
                                <Title>Last Name</Title>
                                <StyledInput
                                    type="text" //
                                    name="namelast" //
                                    onChange={handleChange} //
                                    value={values.namelast}
                                />
                                <Title>Email</Title>
                                <StyledInput
                                    type="email" //
                                    name="email" //
                                    onChange={handleChange} //
                                    value={values.email} //
                                />
                                <ErrorMsg>{errors.email && touched.email && errors.email}</ErrorMsg>
                                <ButtonHolder center={center}>
                                    <SubmitBtn
                                        type="button"
                                        btnColor="#D81734"
                                        onClick={() => setOpenAddUser(false)}
                                        disabled={isSubmitting}
                                    >
                                        Cancel
                                    </SubmitBtn>
                                    <SubmitBtn
                                        onClick={
                                            editObj.btnText === 'Add User'
                                                ? () => {
                                                      postSubmit(values);
                                                      setOpenPopUp({ addUser: true, deleteUser: false });
                                                      formReset(values);
                                                      updateApp();
                                                  }
                                                : () => {
                                                      updateUser(values);
                                                      formReset(values);
                                                      updateApp();
                                                  }
                                        }
                                        type="submit"
                                        btnColor="#3590F3"
                                        disabled={isSubmitting}
                                    >
                                        {editObj.btnText}
                                    </SubmitBtn>
                                </ButtonHolder>
                            </StyledForm>
                        </>
                    )}
                </Formik>
            </FormMother>
        </Modal>
    );
};

export { Modal, FormMother, ButtonHolder, Title, SubmitBtn };

export default AddUser;

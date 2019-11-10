/* eslint-disable no-unused-expressions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/appContext';
import globals from '../globals';

import { Modal, FormMother, ButtonHolder, Title, SubmitBtn } from './AddUser';

const { flex, btnFocus } = globals;

const PopUpMother = styled(FormMother)`
    ${flex('space-around', 'center', 'column')}
    ${btnFocus}
    height: 10rem;
    width: auto;
    padding: 1rem;
    margin-left: 0;
    border-radius: 5px;
`;

const PopUpMessage = styled(Title)`
    margin: 0rem;
    padding: 1rem;
`;

const GeneralPopUp = ({ message, btns, openStatus }) => {
    const { setPopUpConfirm, setOpenPopUp } = useContext(AppContext);

    return (
        <Modal display={openStatus}>
            <PopUpMother display={openStatus}>
                <Title size="1.5rem" align="center" margin="0rem">
                    {message.title}
                </Title>
                <PopUpMessage>{message.content}</PopUpMessage>
                {btns && (
                    <ButtonHolder>
                        <SubmitBtn
                            type="button" //
                            btnColor="#D81734" //
                            onClick={() => setOpenPopUp({ addUser: false, deleteUser: false })}
                        >
                            Cancel
                        </SubmitBtn>
                        <SubmitBtn
                            onClick={
                                () => {
                                    setPopUpConfirm(true);
                                } //
                            }
                            type="submit" //
                            btnColor="#3590F3" //
                        >
                            {message.btnText}
                        </SubmitBtn>
                    </ButtonHolder>
                )}
                {!btns && (
                    <ButtonHolder center>
                        <SubmitBtn
                            type="button" //
                            btnColor="#D81734" //
                            onClick={() => setOpenPopUp({ addUser: false, deleteUser: false })}
                        >
                            Cancel
                        </SubmitBtn>
                    </ButtonHolder>
                )}
            </PopUpMother>
        </Modal>
    );
};
export default GeneralPopUp;

import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { AppWrapper } from './Users';
import LogoNav from '../components/LogoNav';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { RowTitle, TitleRow, Row, RowEl, DateYear } from '../components/UserRow';

const Title = styled(RowTitle)`
    margin-left: 0rem;
`;

const Manufacturers = () => {
    const companyList = [
        {
            companyName: 'Daniel Wellington',
            companyAddress: 'Villagatan 99',
            created: moment().format(`Do MMM h:mm:ss a`)
        },
        {
            companyName: 'Twinnings',
            companyAddress: 'Skällebo 7',
            created: moment().format(`Do MMM h:mm:ss a`)
        },
        {
            companyName: 'Apple',
            companyAddress: 'Karlsängen 5',
            created: moment().format(`Do MMM h:mm:ss a`)
        },
        {
            companyName: 'Coop',
            companyAddress: 'Figgeberg Gårdeby 90',
            created: moment().format(`Do MMM h:mm:ss a`)
        },
        {
            companyName: 'Santa Maria',
            companyAddress: 'Hagag 35',
            created: moment().format(`Do MMM h:mm:ss a`)
        }
    ];
    return (
        <>
            <AppWrapper>
                <LogoNav />
                <NavBar />
                <TitleRow>
                    <Title>Name</Title>
                    <Title>Company Id</Title>
                    <Title>Last Delivery Date</Title>
                </TitleRow>
                {companyList &&
                    companyList.map((e, i) => (
                        <Row key={i}>
                            <RowEl>{e.companyName}</RowEl>
                            <RowEl>{e.companyAddress}</RowEl>
                            <RowEl>{e.created}</RowEl>
                            <RowEl>
                                <DateYear>{moment().format(` (YYYY)`)}</DateYear>
                            </RowEl>
                        </Row>
                    ))}

                <Footer />
            </AppWrapper>
        </>
    );
};

export default Manufacturers;

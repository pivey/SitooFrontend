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

const Products = () => {
    const prodList = [
        { prodName: 'Watches', prodId: Math.ceil(Math.random() * 10), created: moment().format(`Do MMM h:mm:ss a`) },
        { prodName: 'Teapots', prodId: Math.ceil(Math.random() * 10), created: moment().format(`Do MMM h:mm:ss a`) },
        { prodName: 'Ipads', prodId: Math.ceil(Math.random() * 10), created: moment().format(`Do MMM h:mm:ss a`) },
        { prodName: 'Scissors', prodId: Math.ceil(Math.random() * 10), created: moment().format(`Do MMM h:mm:ss a`) },
        { prodName: 'Vases', prodId: Math.ceil(Math.random() * 10), created: moment().format(`Do MMM h:mm:ss a`) }
    ];
    return (
        <>
            <AppWrapper>
                <LogoNav />
                <NavBar />
                <TitleRow>
                    <Title>Name</Title>
                    <Title>Product Id</Title>
                    <Title>Date Updated</Title>
                </TitleRow>
                {prodList &&
                    prodList.map((e, i) => (
                        <Row key={i}>
                            <RowEl>{e.prodName}</RowEl>
                            <RowEl>{e.prodId}</RowEl>
                            <RowEl>{e.created}</RowEl>
                        </Row>
                    ))}

                <Footer />
            </AppWrapper>
        </>
    );
};

export default Products;

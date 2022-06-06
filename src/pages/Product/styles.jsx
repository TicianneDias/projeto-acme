import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 385px;
    position: relative;
`;

export const ProductImage = styled.figure`
    width: 480px;
    background-color: red;
`;

export const ProductDescription = styled.div`
    background-color: var(--color-graylight);
    width: 100%;

    h1 {
        position: relative;
        top: 10%;
        left: 10%;
    }

    p {
        position: relative;
        top: 20%;
        left: 10%;
        width: 70%;
    }
`;

export const ShoppingButton = styled.button`
    width: 200px;
    height: 70px;
    background-color: var(--color-primary);
    color: var(--color-white);
    position: relative;
    top: 30%;
    left: 40%;

    &:hover {
        background-color: var(--color-blue);
        cursor: pointer;
    }
`;
import styled from 'styled-components';

export const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 7rem;
    padding-top: 50px;
    `;

export const ProductItem = styled.div`
    background-color: var(--color-gray);
    height: 330px;
    width: 245px;
    position: relative;
    margin-bottom: 50px;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 1.1rem;
    }

    h6 {
        padding: 10px;
        text-align: justify;
    }

    img {
        z-index: 999;
        width: 150px;
        height: 150px;
    }

    #iconFav, #iconCart {
        width: 40px;
        height: 40px;
        font-size: 1.3rem;
        margin: 1px;
        border-radius: 15px;
        position: absolute;
        top: 85%;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
    
    #iconFav {
        color: var(--color-red);
        left: 63%;
    }

    #iconCart {
        color: var(--color-blue);
        left: 80%;
    }
`;
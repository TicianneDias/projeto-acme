import styled from 'styled-components';

export const CartContainer = styled.div`
    background-color: var(--color-lightdark);
    color: var(--color-white);
    width: 600px;
    height: 530px;
    display: flex;
    flex-wrap: wrap;
    margin: 75px auto;
    box-shadow: 2px 2px 2px var(--color-dark);
    border-radius: 10px;
    position: relative;

    h1 {
        position: absolute;
        left: 40%;
        top: 2%;
    }

    h2 {
        position: absolute;
        left: 10%;
        top: 10%;
        font-size: 1.4rem;
    }

    h3 {
        position: relative;
        left: 55%;
        top: 90%;
        font-size: 1.6rem;
    }
`;


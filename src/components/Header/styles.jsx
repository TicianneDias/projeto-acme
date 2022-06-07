import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: start;
    background-image: linear-gradient(160deg, var(--color-primary), var(--color-lightdark));
    width: 100vw;
    height: 500px;
    position: relative;

    img {
        position: absolute;
        top: 10%;
        left: 3%;
        height: 450px;
    }

    h1 {
        color: var(--color-secundary);
        position: absolute;
        top: 15%;
        left: 30%;
    }

    h2 {
        color: var(--color-white);
        position: absolute;
        top: 30%;
        left: 30%;
    }
`;

export const HeaderButton = styled.button`
    background-color: var(--color-secundary);
    color: var(--color-white);
    width: 150px;
    height: 60px;
    border-radius: 5px;
    border: 2px solid var(--color-white);
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 45%;

    div {
        display: grid;
        grid-template-columns: 1fr 0.3fr;
        align-items: center;
    }

    &:hover {
        background-color: var(--color-blue);
    }
    
`;

export const HeaderPromotion = styled.div`
    background-color: var(--color-white);
    border-radius: 150px;
    height: 150px;
    width: 150px;
    position: absolute;
    top: 65%;
    left: 75%;
    
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-primary);
        margin-left: -10px;
    }
`;
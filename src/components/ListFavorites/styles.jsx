import styled from 'styled-components';

export const FavoriteList = styled.div`
    background-color: var(--color-gray);
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--color-lightdark);
    position: relative;

    a {
        text-decoration: none;
        color: var(--color-lightdark);
        position: absolute;
        top: 50%;
        left: 85%;
        font-weight: 200;

        &:hover {
            color: var(--color-secundary);
            transition: all 0.3s ease-in-out;
        }

    }

    h2 {
        position: absolute;
        top: 35%;
        left: 5%;
    }
`;

export const FavoriteContainer = styled.div`
    background-color: var(--color-primary);
    height: 410px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`;

export const FavoriteItem = styled.div`
    background-color: var(--color-gray);
    width: 340px;
    height: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-left: 7px solid var(--color-secundary);
    border-radius: 5px;

    &:hover {
        border-left: 7px solid var(--color-blue);
        background-color: var(--color-gray);
        opacity: 0.8;
        z-index: 1;
        transition: all 0.3s ease;
        cursor: pointer;
    }
`;
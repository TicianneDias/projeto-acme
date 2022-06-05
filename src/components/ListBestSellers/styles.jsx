import styled from 'styled-components';

export const TopList = styled.div`
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

export const TopListContainer = styled.div`
    background-color: var(--color-white);
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const TopListItem = styled.div`
    background-color: var(--color-gray);
    height: 330px;
    width: 245px;
`;
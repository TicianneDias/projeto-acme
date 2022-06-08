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
    position: relative;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 1.1rem;
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
        position: relative;
        top: 25%;
        left: 63%;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    #iconFav {
        color: var(--color-red);
    }

    #iconCart {
        color: var(--color-blue);
    }
`;
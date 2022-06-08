import styled from 'styled-components';

export const Delivery = styled.div`
    background-color: var(--color-dark);
    width: 100vw;
    height: 48px;
    font-family: 'Overpass', sans-serif;
    font-size: 0.9rem;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
`; 

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray);
    width: 100vw;
    height: 84px;
    justify-content: space-around;
    border-bottom: 1.5px solid var(--color-white);

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    h1 {
        color: var(--color-white);
        padding-left: 5px;
    }

    img {
        height: 35px;
    }

    ul {
        display: flex;
        flex-direction: row;
    }
    
    li {
        display: flex;
        list-style: none;
        padding: 15px;
    }
    
    a {
        text-decoration: none;
        color: var(--color-white);

        &:hover {
            color: var(--color-secundary);
            transition: all 0.5s ease-in-out;
        }
    }

    @media(max-width: 427px) {
        justify-content: center;

        #cartIcon {
            display: none;
        }
    }

`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    #searchIcon {
        position: absolute;
        color: var(--color-gray);
        font-size: 18px;
        left: 5%;
    }
    @media(max-width: 770px) {
        display: none;

        #searchIcon {
            display: none;
        }
    }
    `;

export const SearchBar = styled.input`
    width: 336px;
    padding: 12px 56px 12px 40px;
    border-radius: 5px;
    @media(max-width: 770px) {
        display: none;

        #searchIcon {
            display: none;
        }
    }
    `;

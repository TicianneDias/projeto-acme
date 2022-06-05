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

    h1 {
        color: var(--color-white);
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

`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    #searchIcon {
        position: absolute;
        margin-left: 20px;
        color: var(--color-gray);
        font-size: 18px;
    }

    `;

export const SearchBar = styled.input`
    width: 336px;
    padding: 12px 56px 12px 40px;
    border-radius: 5px;
`;

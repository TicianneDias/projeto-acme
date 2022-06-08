import styled from 'styled-components';

export const Page404Container = styled.div`
    background-color: var(--color-graylight);
    color: var(--color-red);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;

    h3 {
        color: var(--color-secundary);
        padding-top: 40px;
    }

    a {
        text-decoration: none;
        color: var(--color-blue);

        &:hover {
            color: var(--color-lightdark);
        }
    }
`;
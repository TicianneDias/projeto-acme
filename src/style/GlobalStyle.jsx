import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;500&display=swap');
//font-family: 'Overpass', sans-serif;
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
//font-family: 'PT Sans', sans-serif;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'PT Sans', sans-serif;
    }

    :root {
        --color-white: #fff;
        --color-gray: #C5C7BF;
        --color-lightdark: #4B5267;
        --color-dark: #2C2A2A;
        --color-primary: #2E294E;
        --color-secundary: #8661C1;
        --color-blue: #20A4F3;
        --color-red: #D64045;
    }

    main {
        max-width: 100vw;
        margin: 0 auto;
        padding: 5rem 1.2rem;
}

::-webkit-scrollbar {
  display: none;
}
`;
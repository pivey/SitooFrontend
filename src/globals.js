import { css, keyframes } from 'styled-components';

const authToken = 'OTAzMTYtMTI1OnBmWDBZN0EyVFlBbFo1NzFJS0VPN0FLb1h6YTZZbHZzUDhrS3ZBdTM=';
const baseURL = 'https://api-sandbox.mysitoo.com/v2/accounts/90316/';

const btnFocus = css`
    &:focus {
        outline: 0;
    }
`;

const copyCat = state => JSON.parse(JSON.stringify(state));

const ellipsis = css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const noSelect = css`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Opera and Firefox */
`;

const flex = (justify, align, direction = 'row') => `
    display:flex;
    flex-direction:${direction};
    justify-content:${justify};
    align-items:${align};`;

const helpers = {
    noSelect,
    flex,
    btnFocus,
    copyCat,
    authToken,
    baseURL,
    ellipsis
};

export default helpers;

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../styles/colors';
import dimensions from '../../styles/dimensions';

export const buttonStyle = css`
    display: inline-block;
    line-height: 2em;
    padding: 0 ${dimensions.marginSmall};
    margin: ${dimensions.marginSmall};
    background: ${colors.buttonBackground};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    color: ${colors.fontColorMain};
    text-decoration: none;
    border: none;
    outline: inherit;

    &:hover {
        background: ${colors.buttonBackgroundHover};
        color: ${colors.buttonFontHover};
    }

    &:disabled {
        background: ${colors.buttonBackgroundDisabled};
        color: ${colors.buttonFontDisabled};
        cursor: inherit;
    }
`;

const InputButton = styled.button`
    ${buttonStyle};
`;

export const Button = ({ name, ...rest }) => (
    <InputButton {...rest}>{name}</InputButton>
);

Button.propTypes = {
    name: PropTypes.string,
};

export default Button;

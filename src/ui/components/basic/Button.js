import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputButton = styled.span``;

const Button = ({ name, ...rest }) => (
    <InputButton {...rest}>{name}</InputButton>
);

Button.propTypes = {
    name: PropTypes.string,
};

export default Button;

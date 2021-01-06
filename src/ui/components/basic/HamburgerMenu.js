import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

const Icon = styled(Menu)`
    width: 3em;
    cursor: pointer;
`;

const HamburgerMenu = ({ name, ...rest }) => <Icon {...rest}></Icon>;

HamburgerMenu.propTypes = {
    name: PropTypes.string,
};

export default HamburgerMenu;

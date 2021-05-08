import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AdminPanel = styled.div`
    position: absolute;
    font-size: 2em;
    opacity: 0.2;
    translate: 0.2s;

    &:hover {
        opacity: 1;
    }
`;

const RoomAdminPanel = ({ panel, ...rest }) => (
    <AdminPanel {...rest}>{panel}</AdminPanel>
);

RoomAdminPanel.propTypes = {
    panel: PropTypes.object,
};

export default RoomAdminPanel;

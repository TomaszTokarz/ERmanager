import React from 'react';
import styled from 'styled-components';

import socket from '../../../sockets/socket';

const Item = styled.div`
    line-height: 2em;
    color: '#444';
    margin: 0 20px;
`;

export class SettingsPage extends React.Component {
    constructor(props) {
        super(props);

        socket.emit('get_settings', {
            location: location.pathname.replace('/', ''),
            token: 'fakeToken',
        });
    }

    render() {
        return (
            <div>
                <Item>Global Settings</Item>
                <Item>Application Status</Item>
                <Item>Database Status ?</Item>
                <Item>Admin Panel Status, Open</Item>
                <Item>
                    Rooms List (with options, statuses, open, add, etc.)
                </Item>
            </div>
        );
    }
}

export default SettingsPage;

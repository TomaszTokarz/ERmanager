import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import socket from '../../../sockets/socket';
import Rooms from './Rooms';

const Item = styled.div`
    line-height: 2em;
    color: '#444';
    margin: 0 20px;
`;

export class SettingsPage extends React.Component {
    componentDidMount() {
        socket.emit('get_settings', {
            location: location.pathname,
            token: 'fakeToken',
        });
    }

    render() {
        const { serverStatus, dbStatus, rooms } = this.props;

        return (
            <div>
                <Item>
                    <button>Global settings</button>
                </Item>
                <Item>Application Status: {serverStatus}</Item>
                <Item>Database Status: {dbStatus}</Item>
                <Item>
                    <Rooms rooms={rooms} />
                </Item>
            </div>
        );
    }
}

SettingsPage.propTypes = {
    serverStatus: PropTypes.string,
    dbStatus: PropTypes.string,
    rooms: PropTypes.array,
};

const mapStateToProps = state => {
    const { server, db, rooms } = state.application.settings;

    return {
        serverStatus: server,
        dbStatus: db,
        rooms,
    };
};

export default connect(mapStateToProps)(SettingsPage);

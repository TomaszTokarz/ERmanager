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
    constructor(props) {
        super(props);

        socket.emit('get_settings', {
            location: location.pathname,
            token: 'fakeToken',
        });
    }

    render() {
        return (
            <div>
                <Item>
                    <button>Global settings</button>
                </Item>
                <Item>Application Status: {this.props.serverStatus}</Item>
                <Item>Database Status: {this.props.dbStatus}</Item>
                <Item>
                    <Rooms rooms={this.props.rooms} />
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
    return {
        serverStatus: state.application.settings.server,
        dbStatus: state.application.settings.db,
        rooms: state.application.settings.rooms,
    };
};

export default connect(mapStateToProps)(SettingsPage);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import socket from '../../../sockets/socket';
import Header from './Header';
import Rooms from './Rooms';

export class AdminPage extends React.Component {
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
                <Header />
                <Rooms rooms={this.props.rooms} />
            </div>
        );
    }
}

AdminPage.propTypes = {
    rooms: PropTypes.array,
};

const mapStateToProps = state => {
    return {
        rooms: state.application.settings.rooms,
    };
};

export default connect(mapStateToProps)(AdminPage);

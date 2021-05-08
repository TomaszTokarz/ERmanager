import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import socket from '../../../sockets/socket';
import Header from './Header';
import Rooms from './Rooms';

const Wrapper = styled.div`
    width: 100%;
`;

export class AdminPage extends React.Component {
    componentDidMount() {
        socket.emit('get_settings', {
            location: location.pathname,
            token: 'fakeToken',
        });
    }

    render() {
        return (
            <Wrapper>
                <Header />
                <Rooms rooms={this.props.rooms} />
            </Wrapper>
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

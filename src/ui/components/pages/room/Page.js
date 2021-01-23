import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RoomScreen from '../../complex/RoomScreen';

const RoomPage = props => (
    <RoomScreen
        background={props.room.background}
        fontColor={props.room.fontColor}
        room={props.room}
    />
);

RoomPage.propTypes = {
    room: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        room: state.room,
    };
};

export default connect(mapStateToProps)(RoomPage);

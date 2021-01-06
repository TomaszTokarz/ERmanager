import React from 'react';
import PropTypes from 'prop-types';

export default class Room extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.room.name}</div>;
    }
}

Room.propTypes = {
    room: PropTypes.object,
};

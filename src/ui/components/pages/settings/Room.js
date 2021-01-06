import React from 'react';
import PropTypes from 'prop-types';

export default class Room extends React.Component {
    render() {
        return (
            <div>
                {this.props.room.name} - status: {this.props.room.status}
                <button>...</button>
            </div>
        );
    }
}

Room.propTypes = {
    room: PropTypes.object,
};

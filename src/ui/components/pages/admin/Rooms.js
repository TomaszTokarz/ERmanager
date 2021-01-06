import React from 'react';
import PropTypes from 'prop-types';

import Room from './Room';

export default class Rooms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.rooms.map(room => {
                    return <Room key={room.id} room={room} />;
                })}
            </div>
        );
    }
}

Rooms.propTypes = {
    rooms: PropTypes.array,
};

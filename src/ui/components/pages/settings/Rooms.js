import React from 'react';
import PropTypes from 'prop-types';

import Room from './Room';

export default class Rooms extends React.Component {
    render() {
        return (
            <div>
                <hr />
                Rooms List:
                {this.props.rooms.map(room => {
                    return <Room key={room.id} room={room} />;
                })}
                <button>Add room</button>
                <hr />
            </div>
        );
    }
}

Rooms.propTypes = {
    rooms: PropTypes.array,
};

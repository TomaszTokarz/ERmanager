import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Room from './Room';
import Button from '../../basic/Button';

export default class Rooms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { rooms } = this.props;

        return (
            <div>
                <hr />
                Rooms List:
                {rooms.map(room => {
                    return <Room key={room.name} room={room} />;
                })}
                <Link to="/add-room">
                    <Button name="Add Room" />
                </Link>
                <hr />
            </div>
        );
    }
}

Rooms.propTypes = {
    rooms: PropTypes.array,
};

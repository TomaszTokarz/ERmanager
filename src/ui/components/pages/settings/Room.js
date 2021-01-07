import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button, { buttonStyle } from '../../basic/Button';

const Link = styled.a`
    ${buttonStyle};
`;

export default class Room extends React.Component {
    render() {
        const { room } = this.props;

        return (
            <div>
                {room.name} - status: {room.status}
                <Link
                    href={room.path}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go To
                </Link>
                <Button name="..." />
            </div>
        );
    }
}

Room.propTypes = {
    room: PropTypes.object,
};

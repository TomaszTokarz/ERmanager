import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Room from './Room';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default class Rooms extends React.Component {
    render() {
        const { rooms } = this.props;

        return (
            <Wrapper>
                {rooms.map(room => {
                    return <Room key={room.name} room={room} />;
                })}
            </Wrapper>
        );
    }
}

Rooms.propTypes = {
    rooms: PropTypes.array,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default class Rooms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Wrapper>Hints:</Wrapper>;
    }
}

Rooms.propTypes = {
    rooms: PropTypes.array,
};

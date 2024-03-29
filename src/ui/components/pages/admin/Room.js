import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HamburgerMenu from '../../../components/basic/HamburgerMenu';
import Hints from './Hints';
import dimensions from '../../../styles/dimensions';
import colors from '../../../styles/colors';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.panelBackground};
    margin: ${dimensions.marginSmall};
    flex: 1;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StatusBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const RoomName = styled.div`
    margin: 0 ${dimensions.marginSmall};
`;

export default class Room extends React.Component {
    render() {
        const { room } = this.props;

        return (
            <Wrapper>
                <Header>
                    <RoomName>{room.name}</RoomName>
                    <HamburgerMenu />
                </Header>
                <StatusBar>{room.status}</StatusBar>
                <Hints room={room} />
            </Wrapper>
        );
    }
}

Room.propTypes = {
    room: PropTypes.object,
};

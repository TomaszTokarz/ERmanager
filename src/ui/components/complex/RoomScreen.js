import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RoomAdminPanel from './RoomAdminPanel';
import colors from '../../styles/colors';
import images from '../../styles/images';

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: url(${props => props.background});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;
    color: ${props => props.fontColor};
`;

const Clock = styled.div`
    font-size: 5em;
`;

const Hint = styled.div`
    margin: 2em;
    font-size: 2em;
`;

class RoomScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 'Wait to start',
            text: '',
            background: props.room ? props.room.background : images.background,
            fontColor: props.room ? props.room.fontColor : colors.fontColorMain,
        };

        setInterval(() => {
            this.props.room &&
                this.props.room.endTime &&
                this.setState(() => {
                    return {
                        time:
                            moment(
                                this.props.room.endTime - new Date().getTime(),
                            ).format('mm:ss') || '',
                    };
                });
        }, 100);
    }

    componentDidUpdate() {
        const { fontColor, background } = this.props.room || this.state;

        if (!this.state.fontColor && !this.state.background) {
            this.setState({
                fontColor,
                background,
            });
        }
    }

    render() {
        return (
            <Wrapper background={this.props.background}>
                <MainContainer fontColor={this.props.fontColor}>
                    <Clock>{this.state.time}</Clock>
                    <Hint>{this.props.hint || this.props.room.hint}</Hint>
                </MainContainer>
                {this.props.adminPanel && (
                    <RoomAdminPanel panel={this.props.adminPanel} />
                )}
            </Wrapper>
        );
    }
}

RoomScreen.propTypes = {
    background: PropTypes.string,
    fontColor: PropTypes.string,
    room: PropTypes.object,
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    adminPanel: PropTypes.object,
};

export default RoomScreen;

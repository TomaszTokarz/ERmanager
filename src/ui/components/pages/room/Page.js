import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${props => props.background});
    background-position: center;
    background-size: cover;
    color: ${props => props.fontColor};
`;

export class RoomPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 'Wait to start',
        };

        setInterval(() => {
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

    render() {
        return (
            <Wrapper
                background={this.props.room.background}
                fontColor={this.props.room.fontColor}
            >
                <div>
                    Room name: {this.props.room.name} (temporary imformation)
                </div>
                <div>{this.state.time}</div>
                <div>{this.props.room.hint}</div>
            </Wrapper>
        );
    }
}

RoomPage.propTypes = {
    room: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        room: state.room,
    };
};

export default connect(mapStateToProps)(RoomPage);

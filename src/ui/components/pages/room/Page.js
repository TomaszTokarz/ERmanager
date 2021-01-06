import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

export class RoomPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: '',
        };

        setInterval(() => {
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
            <div>
                <div>{this.props.room.name}</div>
                <div>{this.state.time}</div>
                <div>{this.props.room.hint}</div>
            </div>
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

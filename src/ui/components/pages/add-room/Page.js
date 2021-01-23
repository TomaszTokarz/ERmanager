import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import socket from '../../../sockets/socket';
import PropTypes from 'prop-types';

import RoomScreen from '../../complex/RoomScreen';
import Button from '../../basic/Button';
import dimensions from '../../../styles/dimensions';
import colors from '../../../styles/colors';

const Field = styled.div`
    margin: ${dimensions.marginBig};
`;

export class AddRoomPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            path: '',
            duration: 60,
            background: '',
            fontColor: `${colors.fontColorMain}`,
        };

        this.updateFormData = this.updateFormData.bind(this);
        this.updateBackground = this.updateBackground.bind(this);
        this.addRoom = this.addRoom.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    updateFormData(e) {
        const field = {};
        field[e.target.name] = e.target.value;

        this.setState(field);
    }

    updateBackground(e) {
        const reader = new FileReader();

        reader.onload = (e => {
            this.setState({
                background: e.target.result,
            });
        }).bind(this);

        reader.readAsDataURL(e.target.files[0]);
    }

    addRoom(e) {
        e.preventDefault();

        socket.emit('add_room', this.state);

        this.props.history.push('/settings');
    }

    changeColor(e) {
        this.setState({
            fontColor: e.target.value,
        });
    }

    render() {
        return (
            <RoomScreen
                background={this.state.background}
                fontColor={this.state.fontColor}
                hint="This is a simple preview of default room screen"
                room={this.props.room}
                adminPanel={
                    <form onSubmit={this.addRoom}>
                        <Field>
                            Name
                            <input
                                name="name"
                                type="text"
                                placeholder="name"
                                value={this.state.name}
                                onChange={this.updateFormData}
                            />
                        </Field>
                        <Field>
                            Path
                            <input
                                name="path"
                                type="text"
                                placeholder="path to room screen"
                                value={this.state.path}
                                onChange={this.updateFormData}
                            />
                        </Field>
                        <Field>
                            Escape duration
                            <input
                                name="duration"
                                type="number"
                                value={this.state.duration}
                                min="10"
                                max="360"
                                onChange={this.updateFormData}
                            />
                        </Field>
                        <Field>
                            Room background
                            <input
                                name="background"
                                type="file"
                                onChange={this.updateBackground}
                                accept=".jpg, .jpeg, .png"
                            />
                        </Field>
                        <Field>
                            Font color
                            <input
                                type="color"
                                name="fontColor"
                                value={this.state.fontColor}
                                onChange={this.updateFormData}
                            />
                        </Field>
                        <Button
                            name="Add Room"
                            type="submit"
                            disabled={
                                !this.state.name ||
                                !this.state.path ||
                                !this.state.duration ||
                                !this.state.background
                            }
                        />
                        <Link to="/settings">
                            <Button name="Cancel" />
                        </Link>
                    </form>
                }
            />
        );
    }
}

AddRoomPage.propTypes = {
    room: PropTypes.object,
    history: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default AddRoomPage;

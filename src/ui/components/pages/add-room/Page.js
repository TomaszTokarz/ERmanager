import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import socket from '../../../sockets/socket';
import PropTypes from 'prop-types';

import Button from '../../basic/Button';
import dimensions from '../../../styles/dimensions';

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${props => props.background});
        background-size: cover;
        filter: blur(5px) brightness(0.4);
    }
`;

const MainContainer = styled.div`
    position: relative;
    height: 100%;
`;

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
        };

        this.updateFormData = this.updateFormData.bind(this);
        this.updateBackground = this.updateBackground.bind(this);
        this.addRoom = this.addRoom.bind(this);
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

    render() {
        return (
            <Wrapper id="wrapper" background={this.state.background}>
                <MainContainer>
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
                </MainContainer>
            </Wrapper>
        );
    }
}

AddRoomPage.propTypes = {
    history: PropTypes.string,
};

export default AddRoomPage;

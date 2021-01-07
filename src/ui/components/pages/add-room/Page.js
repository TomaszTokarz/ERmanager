import React from 'react';
import styled from 'styled-components';

import Button from '../../basic/Button';
import dimensions from '../../../styles/dimensions';

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.background};
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
                background: `url(${e.target.result})`,
            });
        }).bind(this);

        reader.readAsDataURL(e.target.files[0]);
    }

    addRoom(e) {
        e.preventDefault();

        console.log(this.state);
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
                        <Button name="Cancel" />
                    </form>
                </MainContainer>
            </Wrapper>
        );
    }
}

export default AddRoomPage;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CheckSquare } from '@styled-icons/boxicons-regular/CheckSquare';

import Button from '../../../basic/Button';
import socket from '../../../../sockets/socket';

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;
`;

const Clock = styled.div`
    font-size: 5em;
`;

const Hint = styled.div`
    margin: 2em;
    font-size: 3em;
    cursor: pointer;
`;

const HintInput = styled.input`
    margin: 2em 0;
    font-size: 3em;
`;

const EditHint = styled.div`
    display: flex;
    align-items: center;
`;

const OptionsPanel = styled.div`
    position: absolute;
    font-size: 2em;
    opacity: 0.2;

    &:hover {
        opacity: 1;
    }
`;

const SaveButton = styled(CheckSquare)`
    height: 4em;
    cursor: pointer;
`;

export default class AddHint extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditingHint: false,
            hintIndex: props.hintIndex,
            background: props.room.background,
            text: '',
        };

        this.showHintInput = this.showHintInput.bind(this);
        this.updateHint = this.updateHint.bind(this);
        this.acceptHint = this.acceptHint.bind(this);
        this.saveHint = this.saveHint.bind(this);
    }

    showHintInput() {
        this.setState({
            isEditingHint: true,
        });
    }

    updateHint(e) {
        this.setState({
            text: e.target.value,
        });
    }

    acceptHint(e) {
        this.setState({
            isEditingHint: false,
        });
    }

    saveHint(e, room) {
        socket.emit('add_hint', {
            ...this.state,
            roomId: room._id,
        });
    }

    render() {
        return (
            <Wrapper background={this.state.background}>
                <MainContainer>
                    <Clock>21:37</Clock>
                    {!this.state.isEditingHint && (
                        <Hint onClick={this.showHintInput}>
                            {this.state.text || 'Click here to edit hint'}
                        </Hint>
                    )}
                    {this.state.isEditingHint && (
                        <EditHint>
                            <HintInput
                                name="hint"
                                type="text"
                                placeholder="Hint"
                                value={this.state.text}
                                onChange={this.updateHint}
                            />
                            <SaveButton onClick={this.acceptHint} />
                        </EditHint>
                    )}
                </MainContainer>
                <OptionsPanel>
                    <div>Background: YES</div>
                    <Button
                        onClick={e => this.saveHint(e, this.props.room)}
                        name="Save"
                    />
                    <Button
                        onClick={this.props.closeAddHintWindow}
                        name="Cancel"
                    />
                </OptionsPanel>
            </Wrapper>
        );
    }
}

AddHint.propTypes = {
    hintIndex: PropTypes.number,
    room: PropTypes.object,
    closeAddHintWindow: PropTypes.func,
};

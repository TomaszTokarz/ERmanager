import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CheckSquare } from '@styled-icons/boxicons-regular/CheckSquare';

import RoomScreen from '../../../complex/RoomScreen';
import Button from '../../../basic/Button';
import socket from '../../../../sockets/socket';

const Hint = styled.div`
    cursor: pointer;
`;

const HintInput = styled.input`
    margin: 2em 0;
    font-size: 1em;
`;

const EditHint = styled.div`
    display: flex;
    align-items: center;
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
            fontColor: props.room.fontColor,
        };
    }

    showHintInput = () => {
        this.setState({
            isEditingHint: true,
        });
    };

    updateHint = e => {
        this.setState({
            text: e.target.value,
        });
    };

    acceptHint = () => {
        this.setState({
            isEditingHint: false,
        });
    };

    saveHint = (e, room) => {
        socket.emit('add_hint', {
            ...this.state,
            roomId: room._id,
        });
    };

    changeColor = e => {
        this.setState({
            fontColor: e.target.value,
        });
    };

    render() {
        const { background, fontColor, isEditingHint } = this.state;
        const { room, closeAddHintWindow } = this.props;

        return (
            <RoomScreen
                background={background}
                fontColor={fontColor}
                room={room}
                hint={
                    !isEditingHint ? (
                        <Hint onClick={this.showHintInput}>
                            {this.state.text || 'Click here to edit hint'}
                        </Hint>
                    ) : (
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
                    )
                }
                adminPanel={
                    <div>
                        <div>Background: YES</div>
                        <div>Font color</div>
                        <input
                            type="color"
                            id="head"
                            name="head"
                            value={fontColor}
                            onChange={this.changeColor}
                        />
                        <Button
                            onClick={e => this.saveHint(e, room)}
                            name="Save"
                        />
                        <Button onClick={closeAddHintWindow} name="Cancel" />
                    </div>
                }
            />
        );
    }
}

AddHint.propTypes = {
    hintIndex: PropTypes.number,
    room: PropTypes.object,
    closeAddHintWindow: PropTypes.func,
};

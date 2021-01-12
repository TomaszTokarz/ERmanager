import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CheckSquare } from '@styled-icons/boxicons-regular/CheckSquare';

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
    font-size: 3em;
`;

const EditHint = styled.div`
    display: flex;
    align-items: center;
    margin: 2em;
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
            hintIndex: null,
            background: props.room.background,
            hint: null,
        };

        this.showHintInput = this.showHintInput.bind(this);
        this.updateHint = this.updateHint.bind(this);
        this.acceptHint = this.acceptHint.bind(this);
    }

    showHintInput() {
        this.setState({
            isEditingHint: true,
        });
    }

    updateHint(e) {
        this.setState({
            hint: e.target.value,
        });
    }

    acceptHint(e) {
        this.setState({
            isEditingHint: false,
        });
    }

    render() {
        return (
            <Wrapper background={this.state.background}>
                <MainContainer>
                    <Clock>28:46</Clock>
                    {!this.state.isEditingHint && (
                        <Hint onClick={this.showHintInput}>
                            {this.state.hint || 'Click here to edit hint'}
                        </Hint>
                    )}
                    {this.state.isEditingHint && (
                        <EditHint>
                            <HintInput
                                name="hint"
                                type="text"
                                placeholder="Hint"
                                value={this.state.hint}
                                onChange={this.updateHint}
                            />
                            <SaveButton onClick={this.acceptHint} />
                        </EditHint>
                    )}
                </MainContainer>
                <OptionsPanel>
                    <div>Background: YES</div>
                    <div>Save</div>
                    <div>Cancel</div>
                </OptionsPanel>
            </Wrapper>
        );
    }
}
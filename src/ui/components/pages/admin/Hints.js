import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../../components/basic/Button';
import Hint from './Hint';
import AddHint from './crud/AddHint';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const HintsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const LongButton = styled(Button)`
    width: 100%;
    margin: 0;
`;

export default class Hints extends React.Component {
    state = {
        openAddHintWindow: false,
        hintIndex: null,
    };

    addHint = (e, data) => {
        this.setState({
            openAddHintWindow: true,
            hintIndex: data.hintIndex,
        });
    };

    closeAddHintWindow = () => {
        this.setState({
            openAddHintWindow: false,
            hintIndex: null,
        });
    };

    render() {
        const { room } = this.props;
        const { openAddHintWindow, hintIndex } = this.state;

        return (
            <Wrapper>
                Hints:
                <Button
                    name="Add Hint Here"
                    onClick={e =>
                        this.addHint(e, {
                            hintIndex: 0,
                        })
                    }
                />
                <HintsList>
                    {room.hints.map((hint, index) => (
                        <Hint
                            key={hint.text + '_' + index}
                            hint={hint}
                            index={index}
                            addHint={this.addHint}
                        />
                    ))}
                </HintsList>
                {openAddHintWindow && (
                    <AddHint
                        visible={openAddHintWindow}
                        room={room}
                        hintIndex={hintIndex}
                        closeAddHintWindow={this.closeAddHintWindow}
                    />
                )}
            </Wrapper>
        );
    }
}

Hints.propTypes = {
    rooms: PropTypes.array,
    room: PropTypes.object,
};

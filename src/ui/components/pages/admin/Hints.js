import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../../components/basic/Button';
import AddHint from '../../../components/basic/Modal';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const LongButton = styled(Button)`
    width: 100%;
    margin: 0;
`;

export default class Rooms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openAddHintWindow: false,
        };

        this.addHint = this.addHint.bind(this);
    }

    addHint(e, data) {
        this.setState({
            openAddHintWindow: true,
        });
    }

    render() {
        return (
            <Wrapper>
                Hints:
                <Button
                    name="Add Hint Here"
                    onClick={e =>
                        this.addHint(e, {
                            index: 0,
                        })
                    }
                />
                <AddHint openAddHintWindow={this.state.openAddHintWindow} />
            </Wrapper>
        );
    }
}

Rooms.propTypes = {
    rooms: PropTypes.array,
};

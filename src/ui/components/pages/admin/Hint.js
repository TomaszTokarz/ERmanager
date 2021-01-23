import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../../components/basic/Button';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: url(${props => props.background});
    background-position: center;
    background-size: cover;
    width: 320px;
    height: 180px;
`;

export default class Hint extends React.Component {
    render() {
        const { hint, index, addHint } = this.props;

        return (
            <Wrapper background={hint.background}>
                <div>
                    {index}: {hint.text}
                </div>
                <Button
                    name="Add Hint Here"
                    onClick={e =>
                        addHint(e, {
                            hintIndex: index + 1,
                        })
                    }
                />
            </Wrapper>
        );
    }
}

Hint.propTypes = {
    index: PropTypes.number,
    text: PropTypes.string,
    addHint: PropTypes.func,
    hint: PropTypes.object,
};

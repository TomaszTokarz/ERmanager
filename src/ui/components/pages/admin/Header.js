import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import dimensions from '../../../styles/dimensions';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${dimensions.marginSmall};
`;

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clock: '',
        };

        setInterval(() => {
            this.setState(() => {
                return {
                    clock: moment().format('HH:mm:ss'),
                };
            });
        }, 100);
    }

    render() {
        return (
            <Wrapper>
                <div>Escape room - management application</div>
                <div>{this.state.clock}</div>
            </Wrapper>
        );
    }
}

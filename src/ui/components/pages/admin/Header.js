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
    state = {
        clock: '',
    };

    componentDidMount = () => {
        setInterval(() => {
            this.setState(() => {
                return {
                    clock: moment().format('HH:mm:ss'),
                };
            });
        }, 100);
    };

    render() {
        const { clock } = this.state;

        return (
            <Wrapper>
                <div>Escape room - management application</div>
                <div>{clock}</div>
            </Wrapper>
        );
    }
}

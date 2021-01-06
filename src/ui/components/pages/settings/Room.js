import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
    line-height: 2.5em;
    margin: 0 10px;
    padding: 0 10px;
    border: 1px solid #000;
    text-decoration: none;
    color: #000;
`;

export default class Room extends React.Component {
    render() {
        return (
            <div>
                {this.props.room.name} - status: {this.props.room.status}
                <Link
                    href={this.props.room.path}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go to
                </Link>
                <button>...</button>
            </div>
        );
    }
}

Room.propTypes = {
    room: PropTypes.object,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';

const ModalWindow = props => (
    <Modal isOpen={!!props.openAddHintWindow} contentLabel="Add Hint">
        Add hint.
    </Modal>
);

ModalWindow.propTypes = {
    openAddHintWindow: PropTypes.function,
};

export default ModalWindow;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function ModalR (props) {
    return (
        <div>
            <Modal open={props.open} onClose={props.onClose}>
                <ul>
                    {
                        /* Object.values(props.languages).map((language, i) => 
                            <li key={i}>{language}</li>
                        ) */
                    }
                </ul>
            </Modal>
        </div>
    );
}
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({
    message,
}) => {
    return <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar

    />
}

export default Toast;

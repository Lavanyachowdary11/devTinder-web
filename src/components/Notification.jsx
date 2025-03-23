import React from 'react'

const Notification = ({ msg }) => {
    return (
        <div className="toast toast-top toast-center">
            <div className="alert alert-info">
                <span>{msg}</span>
            </div>
        </div>
    )
}

export default Notification
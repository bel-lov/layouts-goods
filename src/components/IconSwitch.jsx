import React from 'react';

export default function IconSwitch(props) {
    const { icon, onSwitch } = props;
    return (
        <div className="IconSwitch">
            <div className="IconSwitch-button" onClick={onSwitch} onSwitch={() => console.log("change state here")}>
                <span className="material-icons">{icon}</span>
            </div>
        </div>
    )
}
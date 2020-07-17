import React from 'react';
import "./style.css"

export default function Card(props) {
    return (
        <div className="card-container">
            <p className="data-p">{props.text}</p>
        </div>
    )
}

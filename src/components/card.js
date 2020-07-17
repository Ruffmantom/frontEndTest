import React from 'react';
import "./style.css"

export default function Card(props) {
    return (
        <div className="card-container">
            <h3 className="title">{props.title}</h3>
            <div className="bottom-section">
                <p className="data-p">{props.author}</p>
                <p className="data-p">{props.date}</p>
            </div>
        </div>
    )
}

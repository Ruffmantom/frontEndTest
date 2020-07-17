import React from 'react';
import "./style.css";

export default function Header(props) {
    return (
        <div className="header">
            <h1>Api options</h1>
            <div className="options-div">
                <label for="Catagories">Catagories</label>

                <select id="Catagories" onChange={(e) => {
                    props.checkHandler(e.target.value);
                }}>
                    <option value="All">All Posts</option>
                    <option value="Politics">Politics</option>
                    <option value="Health">Health</option>
                    <option value="Sports">Sports</option>
                </select>
                <button className="sort-btn">Sort By Most Recent</button>
            </div>
        </div>
    )
}

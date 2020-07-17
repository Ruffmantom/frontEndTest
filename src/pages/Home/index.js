import React, { Component } from 'react';
import Card from "../../components/card";


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("https://ruffmantom.github.io/dadJokesRestApi/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.News
                    });
                    console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="loading-div">
                    <h2>Loading ...</h2>
                </div>
            )
        } else {
            return (
                <div>
                    {items.map(item => (
                        <Card 
                        key={item.Date} 
                        title={item.Title}
                        author={item.Author}
                        date={item.date}
                        >
                        </Card>
                    ))}
                </div>


            );
        }
    }
}

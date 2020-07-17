import React, { Component } from 'react';
import Card from "../../components/Card";
import Header from "../../components/Header";
var sortJsonArray = require('sort-json-array');


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            choice: ""
        };
    }
    componentDidMount() {
        fetch("https://ruffmantom.github.io/dadJokesRestApi/")
            .then(res => res.json())
            .then(
                (result) => {
                    sortJsonArray(result.News, "date", "des")
                    
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
    // handleSort = (data) =>{
    //     this.setState({items: sortJsonArray(data.News, "date", "des") })
    // }
    
    checkHandler = (e) => {
        this.setState({choice: e});
        console.log(e)
      }
    
    render() {
        
        const { error, isLoaded, items, choice } = this.state;


        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="loading-div">
                    <h2>Loading ...</h2>
                </div>
            )
        } else {
            if(choice === "Politics"){
                let choiceArr = items.filter(item => item.Catagory === "Politics")
                return (
                    <div>
                        <Header
                        checkHandler={this.checkHandler}
                        // handleSort={this.handleSort(items)}
                        />
                        {choiceArr.map(item => (
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
            }else if(choice === "Health"){
                let choiceArr = items.filter(item => item.Catagory === "Health")
                return (
                    <div>
                        <Header
                        checkHandler={this.checkHandler}
                        // handleSort={this.handleSort(items)}
                        />
                        {choiceArr.map(item => (
                            <Card 
                            key={item.Date} 
                            title={item.Title}
                            author={item.Author}
                            date={item.date}
                            >
                            </Card>
                        ))}
                    </div>  
                )
            } else if(choice === "Sports"){
                let choiceArr = items.filter(item => item.Catagory === "Sports")
                return (
                    <div>
                        <Header
                        checkHandler={this.checkHandler}
                        // handleSort={this.handleSort(items)}
                        />
                        {choiceArr.map(item => (
                            <Card 
                            key={item.Date} 
                            title={item.Title}
                            author={item.Author}
                            date={item.date}
                            >
                            </Card>
                        ))}
                    </div>  
                )
            } else{
                return (
                    <div>
                        <Header
                        checkHandler={this.checkHandler}
                        // handleSort={this.handleSort(items)}
                        />
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
                )
            }
            
        }
    }
}

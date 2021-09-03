import React, { Component } from 'react'
// import { robots } from './robots'
import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'




class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            robots: []
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(user => this.setState({
           robots: user
        }))
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())
        })
         return(
            <div className="tc">
            {!this.state.robots.length ? <h1>Loading...</h1>
            :
            <>
            <h1>Robofriends</h1>
            <Searchbox robots={this.state.robots} handleChange={this.handleChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
            </>}
             </div>
         )  
    }
}

export default App

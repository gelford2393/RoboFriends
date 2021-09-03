import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setState({hasError:true})
    }
    render() {
       
        return (
            <div>
                { this.state.hasError ? 
                    <h2>OOps. that is not good</h2>
                 : 
                    <>{this.props.children}</>
                }
            </div>
        );
    }
}

export default ErrorBoundry;
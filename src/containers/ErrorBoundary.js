import React, {Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }

  componenetDidCatch(error, info){
    this.setState({ hasError: true })
  }

  render(){
    if (this.state.hasError) {
      console.log('step1')
      return <h1>wowowowo  w9f  3nd  7adk</h1>
    }
    console.log('step2')
    return <div>{this.props.children}</div>
  }

} 

export default ErrorBoundary;
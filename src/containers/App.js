import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import scroll from '../components/scroll';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {   
  constructor (){
    super()
    this.state = {
      robots: [],
      searchField : ''
    };
    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots :users }));
  }
  
  onChangeSearch = (event) => {
    this.setState({searchField: event.target.value})
  }

  render(){
    const {robots, searchField} = this.state;
    const filtredRobots = this.state.robots.filter((robot) => {
         return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    
    return !(robots.length) ? (<div class="dotted-loader"></div>)
    :
      (
        <div className='text-center'>
          <h1 className='f2 pa3 ma8'>Robofriend</h1>
          <SearchBox onChangeSearch={this.onChangeSearch}/>
          <scroll>
            <div className='scroll'>
              <ErrorBoundary>
                <CardList robots={filtredRobots}/>
              </ErrorBoundary>
            </div>
          </scroll>
        </div>
      )
  }
}       

export default App;

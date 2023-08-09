import Sidebar from './sidebar';
import Header from './header';
import PageContent from './pagecontent'
import './general.css';
import { Component } from 'react';
import { switchTheme } from './theme';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header switchTheme={()=>{switchTheme(); this.setState({})}}></Header>
        <div className='Row'>
          <Sidebar></Sidebar>
          <PageContent></PageContent>
        </div>
      </div>
    );
  }
}


export default App;

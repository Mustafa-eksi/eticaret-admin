import Sidebar from './sidebar';
import Header from './header';
import PageContent from './pagecontent'
import './general.css';
import { Component } from 'react';
import { switchTheme } from './theme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctx: 0
    };
  }
  render() {
    return (
      <div className="App">
        <Header switchTheme={()=>{switchTheme(); this.setState({})}}></Header>
        <div className='Row'>
          <Sidebar changeContext={(ctxIndex)=>{
            this.setState({ctx:ctxIndex});
          }} ctx={this.state.ctx}></Sidebar>
          <PageContent ctx={this.state.ctx}></PageContent>
        </div>
      </div>
    );
  }
}


export default App;

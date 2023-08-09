import Sidebar from './sidebar';
import Header from './header';
import PageContent from './pagecontent'
import './general.css';
import { Component } from 'react';
import { getTheme, getThemeIndex, switchTheme } from './theme';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentDidMount() {
    document.title = "Eticaret Admin Paneli";
    document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", getThemeIndex() === 0? "light" : "dark");
  }
  constructor(props) {
    super(props);
    this.state = {
      ctx: 0
    };
  }
  render() {
    return (
      <div className="App">
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>
        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>
        <script>var Alert = ReactBootstrap.Alert;</script>
        <Header switchTheme={()=>{
          switchTheme();
          this.setState({});
          document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", getThemeIndex() === 0? "light" : "dark"); // for bootstrap elements
          }}></Header>
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

import { Component } from 'react';
import './general.css';
import { getTheme } from './theme';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar" style={{backgroundColor:getTheme().sidebar_color, color:getTheme().text_color}}>
        a
      </div>
    );
  }
}

export default Sidebar;

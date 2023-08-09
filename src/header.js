import { Component } from 'react';
import './general.css';
import { getTheme, getThemeIndex, switchTheme } from './theme';

class Header extends Component {
    render() {
        return (
          <header className="Navbar" style={{backgroundColor:getTheme().navbar_color}}>
              <h1 className='page-title' style={{color:getTheme().text_color}}>Eticaret Admin Paneli</h1>
              <button className="ThemeSwitcher" style={{backgroundColor:getTheme().text_color, borderColor:getTheme().text_color}} onClick={this.props.switchTheme}>{getThemeIndex() == 0 ? "🌙" : "☀️"}</button>
          </header>
        );
    }
}

export default Header;

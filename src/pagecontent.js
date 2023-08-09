import { Component } from 'react';
import './general.css';
import { getTheme } from './theme';

class PageContent extends Component {
    render() {
        return (
          <div className="Contents" style={{backgroundColor:getTheme().bg_color, color:getTheme().text_color}}>
            b
          </div>
        );
    }
}


export default PageContent;

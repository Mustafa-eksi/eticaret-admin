import { Component } from 'react';
import './general.css';
import { getTheme } from './theme';

class AddProduct extends Component {
    render() {
        return (
            <div>
                Add product
            </div>
        );
    }
}

class EditProduct extends Component {
    render() {
        return (
            <div>
                Edit product
            </div>
        );
    }
}

const contexts = [
    ()=>{return(<AddProduct></AddProduct>)},
    ()=>{return(<EditProduct></EditProduct>)}
]
class PageContent extends Component {
    
    render() {
        return (
          <div className="Contents" style={{backgroundColor:getTheme().bg_color, color:getTheme().text_color}}>
            {contexts[this.props.ctx]()}
          </div>
        );
    }
}


export default PageContent;

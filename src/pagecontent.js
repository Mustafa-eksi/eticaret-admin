import { Component } from 'react';
import './general.css';
import { getTheme } from './theme';
import { InputGroup, Form } from 'react-bootstrap';

class AddProduct extends Component {
    render() {
        return (
            <div>
                <InputGroup className='p-3'>
                    <InputGroup.Text id="urunadiyazi">Ürün adı</InputGroup.Text>
                    <Form.Control
                    placeholder="İsim"
                    aria-label="İsim"
                    aria-describedby="urunadiyazi"
                    />
                </InputGroup>
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
    ()=><AddProduct></AddProduct>,
    ()=><EditProduct></EditProduct>
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

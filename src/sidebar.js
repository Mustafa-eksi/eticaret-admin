import { Component } from 'react';
import './general.css';
import { getTheme } from './theme';

class SideButton extends Component {
  render() {
    return (
      <button onClick={()=>this.props.onclick()} className="UrunOlustur" style={{backgroundColor:this.props.isctx ? getTheme().accent_color : getTheme().navbar_color, color:getTheme().text_color}}>
        {this.props.name}
      </button>
    );
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar" style={{backgroundColor:getTheme().sidebar_color, color:getTheme().text_color}}>
        <SideButton name="Ürün oluştur" onclick={()=>this.props.changeContext(0)} isctx={this.props.ctx===0}></SideButton>
        <SideButton name="Ürün Düzenle" onclick={()=>this.props.changeContext(1)} isctx={this.props.ctx===1}></SideButton>
      </div>
    );
  }
}

export default Sidebar;

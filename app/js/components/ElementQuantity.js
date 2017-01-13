import React, {Component} from 'react';
export default class Quantity extends Component {

    setQuantity(event){
    
      var _this = event.currentTarget,
          _parent = _this.parentNode.parentNode.parentNode.parentNode,
          goldPrice = _parent.getElementsByClassName('goldPrice'),
          retailPrice = _parent.getElementsByClassName('retailPrice'),
          qty = _parent.getElementsByClassName('product__count'),
          type = _parent.getElementsByClassName('unit--active')[0].dataset.type;
          
          
      if(_this.classList.contains('up')){
        qty[0].value++;
      }else if(_this.classList.contains('down')&&qty[0].value>1){
        qty[0].value--;
      }
      
      goldPrice[0].innerText = (goldPrice[0].dataset['price'+type]*qty[0].value).toFixed(2).replace('.',','); 
      retailPrice[0].innerText = (retailPrice[0].dataset['price'+type]*qty[0].value).toFixed(2).replace('.',',');      

    } 
    
    
    render(){
      return(
      <div className="stepper">
          <input className="product__count stepper-input" type="text" value="1"/>
          <span onClick = {this.setQuantity.bind(this)} className="stepper-arrow up"></span>
          <span onClick = {this.setQuantity.bind(this)} className="stepper-arrow down"></span>                                            
      </div>
      )
    }
}
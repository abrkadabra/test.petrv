import React, {Component} from 'react';

export default class ElementUnits extends Component {

    setUnit(event){

      var _this = event.currentTarget,
          _parent = _this.parentNode.parentNode.parentNode,
          goldPrice = _parent.getElementsByClassName('goldPrice'),
          retailPrice = _parent.getElementsByClassName('retailPrice'),
          qty = _parent.getElementsByClassName('product__count');
           
          
          for (var i = 0; i < _parent.getElementsByClassName('unit--select').length; i++) {
            _parent.getElementsByClassName('unit--select')[i].classList.remove('unit--active')
          }
          _this.classList.add('unit--active');
          
          var type='price'+_this.dataset.type;
              goldPrice[0].innerText = (goldPrice[0].dataset[type]*qty[0].value).toFixed(2).replace('.',','); 
              retailPrice[0].innerText = (retailPrice[0].dataset[type]*qty[0].value).toFixed(2).replace('.',',');   
              
            
    } 
  render(){
      return(
          <div className="product_units">
              <div className="unit--wrapper">
                  <div onClick = {this.setUnit.bind(this)} className="unit--select unit--active" data-type="Alt">
                       <p className="ng-binding">За {this.props.data.unitAlt}</p>
                  </div>
                  {this.props.data.unit!==this.props.data.unitAlt&&
                  <div onClick = {this.setUnit.bind(this)} className="unit--select" data-type="">
                       <p className="ng-binding">За {this.props.data.unit}</p>
                  </div>
                  }                      
              </div>
          </div>
      );  
  }   
}

import React, { Component } from 'react';
import HttpReq from './HttpReq';
import ProductList from './components/ProductList';

export default class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: null,
        page:0,
        key:null
        }
        
      this.loadProducts();
      
    }
    
    loadProducts(){   

      HttpReq(this.props.url).then(products => {
        this.initialData = JSON.parse(products);
        this.setState({
          data: this.initialData
        });
      });          
    }
    
    
    

   render() {
      return (
              <div className="products_page pg_{this.state.page}">
                <ProductList data={this.state.data}/>
              </div>
            
      );
   }
}
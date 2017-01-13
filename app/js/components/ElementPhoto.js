import React, {Component} from 'react';

export default ({data}) => {

    if (!data) { return (<div>NOT IMG</div>); }
    const imageUrl = data.replace(/(\w)\.(jpg|jpeg|png|gif)/,'\$1_220x220_1.\$2');
    
    return (
          <div className="product_photo">
              <a href="#" className="url--link product__link">
                  <img src={imageUrl} />
              </a>                                    
          </div>
          
    ); 

}

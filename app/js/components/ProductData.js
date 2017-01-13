import React from 'react';
import ElementPhoto from './ElementPhoto';
import ElementUnits from './ElementUnits';
import ElementTags from './ElementTags';
import ElementQuantity from './ElementQuantity';

export default ({products, index }) => {

  var iconRuble = '<svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">'+
           '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>'+
           '</svg>',
      iconCart = '<svg class="ic ic_cart"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use></svg>';
  return (
    <div className="product product_horizontal">                                
                                <span className="product_code">Код: {parseInt(products.code)}</span>
                                <div className="product_status_tooltip_container">
                                    <span className="product_status">Наличие</span>
                                </div>  
                                                              
                                <ElementPhoto data={products.primaryImageUrl}/> 

                                <div className="product_description">
                                    <a href="#" className="product__link">{products.title}</a>
                                </div>
                                
                                <ElementTags data={products.assocProducts}/>
                                
                                <ElementUnits data={{'unit':products.unit,'unitAlt':products.unitAlt}}/>

                                <p className="product_price_club_card">
                                    <span className="product_price_club_card_text">По карте<br/>клуба</span>
                                    <span className="goldPrice" data-price-alt={products.priceGoldAlt} data-price={products.priceGold}>{products.priceGoldAlt.toFixed(2).replace('.',',')}</span>
                                    <span className="rouble__i black__i" dangerouslySetInnerHTML={{__html: iconRuble}}>
                                        
                                     </span>
                                </p>
                                <p className="product_price_default">
                                    <span className="retailPrice" data-price-alt={products.priceRetailAlt} data-price={products.priceRetail}>{products.priceRetailAlt.toFixed(2).replace('.',',')}</span>
                                    <span className="rouble__i black__i" dangerouslySetInnerHTML={{__html: iconRuble}}>
                                        
                                     </span>
                                </p>
                                <div className="product_price_points">
                                    <p className="ng-binding">Можно купить за 231,75 балла</p>
                                </div>
                                <div className="list--unit-padd"></div>
                                {products.unit!=products.unitAlt&&
                                <div className="list--unit-desc">
                                    <div className="unit--info">
                                        <div className="unit--desc-i"></div>
                                        <div className="unit--desc-t">
                                            <p>
                                                <span className="ng-binding">Продается упаковками:</span>
                                                <span className="unit--infoInn">1 {products.unit} = {(products.unitRatio/products.unitRatioAlt).toFixed(2)} {products.unitAlt}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                }
                                
                                
                                <div className="product__wrapper">
                                    <div className="product_count_wrapper">
                                        
                                        <ElementQuantity/>    
                                        
                                    </div>
                                    <span className="btn btn_cart" data-product-id={products.productId} data-url="/cart/">
                                         
                                        <span className="ng-binding">В корзину</span>
                                    </span>
                                </div>
                            </div>
  );
};


import React from 'react';
import ProductData from './ProductData';

export default ({data}) => {
  if (!data) { return (<p>Загрузка товаров...</p>); }

  const products = data.map((products, index) => {
    return (<ProductData key={`product-${index}`} index={index} products={products} />);
  });

  return (
        <div>
        {products}
        </div>
        
  );
};
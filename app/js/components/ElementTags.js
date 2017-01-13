import React, {Component} from 'react';


export default ({data}) => {

  if (!data) { return (<div className="product_tags hidden-sm"></div>); }
  
  const tags = data.split(';').map((tag, index) => {
    if(tag!=''){
      return (<a key={`tags-${index}`} href="#" className="url--link">{tag}</a>);
    }
  });
 
  return (                             
      <div className="product_tags hidden-sm">
            <p>Могут понадобиться:</p>
             {tags}
      </div>                                        
  );
};

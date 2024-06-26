import React from 'react';

const ProductListing = ({ product }) => {
  return (
    <div className="product-listing" style={{ marginBottom: '20px' }}>
      <div className="product-frame" style={{ border: '4px solid #A4826D', padding: '15px', borderRadius: '8px' }}>
        <div className="product-image" style={{ marginBottom: '10px' }}>
          <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <div className="product-details">
          <h4>{product.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

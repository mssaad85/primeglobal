import React, { useState } from 'react';

function Product({ product, quantity, onQuantityChange }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Toggle image preview modal
  const togglePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  return (
    <div className="product">
      <div className="product-row">
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
            onClick={togglePreview}
            style={{ cursor: 'pointer', width: '80px', height: 'auto' }}
          />
        </div>

        {isPreviewOpen && (
          <div className="image-preview-modal">
            <span onClick={togglePreview} className="close-btn">
              X
            </span>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
            />
          </div>
        )}

        <div className="product-details">
          <label>{product.name}</label>
          <label>Box Price: ${product.boxPrice.toFixed(2)}</label>
          <label>Qty per Box: {product.qtyPerBox}</label>
          <label>Price per Item: ${product.pricePerItem.toFixed(2)}</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => onQuantityChange(product.id, e.target.value)}
            min="0"
            placeholder="Enter Quantity"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default Product;

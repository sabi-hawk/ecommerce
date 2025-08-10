import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );
  const dispatch = useDispatch();

  const addProduct = (productToAdd) => {
    dispatch(addCart(productToAdd));
    toast.success('Added to cart');
  };

  const isOutOfStock = product.stock === 0 || (selectedVariant && selectedVariant.stock === 0);
  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const currentStock = selectedVariant ? selectedVariant.stock : product.stock;

  const handleVariantChange = (e) => {
    const variantId = e.target.value;
    const variant = product.variants.find(v => v.id === variantId);
    setSelectedVariant(variant);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      price: currentPrice,
      variant: selectedVariant,
      stock: currentStock
    };
    addProduct(productToAdd);
  };

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-card__image"
        />
        {isOutOfStock && (
          <div className="product-card__overlay">
            <span className="product-card__out-of-stock-badge">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="product-card__content">
        <h3 className="product-card__name">{product.name}</h3>
        
        <div className="product-card__price">
          ${currentPrice.toFixed(2)}
        </div>

        {product.variants && product.variants.length > 0 && (
          <div className="product-card__variants">
            <label htmlFor={`variant-${product.id}`} className="product-card__variant-label">
              {product.variantType || 'Options'}:
            </label>
            <select 
              id={`variant-${product.id}`}
              className="product-card__variant-select"
              value={selectedVariant?.id || ''}
              onChange={handleVariantChange}
              disabled={isOutOfStock}
            >
              {product.variants.map(variant => (
                <option key={variant.id} value={variant.id}>
                  {variant.name} {variant.stock === 0 ? '(Out of Stock)' : ''}
                </option>
              ))}
            </select>
          </div>
        )}

        <button 
          className={`product-card__button ${isOutOfStock ? 'product-card__button--disabled' : ''}`}
          onClick={handleAddToCart}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </button>

        {currentStock > 0 && currentStock <= 5 && (
          <div className="product-card__stock-warning">
            Only {currentStock} left in stock!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
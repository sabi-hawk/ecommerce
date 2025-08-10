import React from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';

const ProductCardDemo = () => {
  // Test data for the product cards
  const testProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
      stock: 15,
      variants: [
        { id: 'black', name: 'Black', price: 199.99, stock: 15 },
        { id: 'white', name: 'White', price: 199.99, stock: 8 },
        { id: 'blue', name: 'Blue', price: 209.99, stock: 3 }
      ],
      variantType: 'Color'
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 299.99,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
      stock: 0,
      variants: [
        { id: 'small', name: 'Small (38mm)', price: 299.99, stock: 0 },
        { id: 'large', name: 'Large (42mm)', price: 329.99, stock: 0 }
      ],
      variantType: 'Size'
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      image: "https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=600",
      stock: 25,
      variants: [
        { id: 's', name: 'Small', price: 29.99, stock: 5 },
        { id: 'm', name: 'Medium', price: 29.99, stock: 12 },
        { id: 'l', name: 'Large', price: 29.99, stock: 8 },
        { id: 'xl', name: 'X-Large', price: 32.99, stock: 0 }
      ],
      variantType: 'Size'
    },
    {
      id: 4,
      name: "Professional Camera Lens",
      price: 899.99,
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      stock: 3,
      variants: []
    },
    {
      id: 5,
      name: "Minimalist Desk Lamp",
      price: 79.99,
      image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600",
      stock: 12,
      variants: [
        { id: 'warm', name: 'Warm Light', price: 79.99, stock: 12 },
        { id: 'cool', name: 'Cool Light', price: 84.99, stock: 7 }
      ],
      variantType: 'Light Type'
    },
    {
      id: 6,
      name: "Artisan Coffee Beans",
      price: 24.99,
      image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600",
      stock: 0,
      variants: [
        { id: 'light', name: 'Light Roast', price: 24.99, stock: 0 },
        { id: 'medium', name: 'Medium Roast', price: 24.99, stock: 0 },
        { id: 'dark', name: 'Dark Roast', price: 26.99, stock: 0 }
      ],
      variantType: 'Roast'
    }
  ];

  return (
    <div className="product-demo">
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Product Card Demo</h1>
          <p className="lead text-muted">
            Responsive product cards with variant selection and stock management
          </p>
        </div>
        
        <div className="row g-4">
          {testProducts.map(product => (
            <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-5 p-4 bg-light rounded">
          <h3 className="h5 mb-3">Layout Approach & Responsiveness</h3>
          <p className="mb-2">
            <strong>Layout Approach:</strong> Used CSS Flexbox for consistent card heights and content distribution, 
            with a clean card-based design featuring hover animations and visual hierarchy through typography and spacing.
          </p>
          <p className="mb-0">
            <strong>Responsiveness:</strong> Implemented mobile-first responsive design with Bootstrap grid system 
            (3 columns on desktop, 2 on tablet, 1 on mobile) and adaptive component sizing for optimal viewing across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDemo;
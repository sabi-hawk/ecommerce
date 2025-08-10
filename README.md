# E-commerce Frontend Assessment

This project contains a responsive Product Card UI implementation for the Frontend Developer assessment.

## 🎯 Assessment Overview

**Task**: Implement a responsive Product Card UI using real-world data and design logic.

**Requirements Met**:
- ✅ Product image display
- ✅ Product name and price
- ✅ Variant options dropdown/label
- ✅ "Add to Cart" button
- ✅ "Out of Stock" state handling
- ✅ Clean and modern visual layout
- ✅ Responsive design following UI/UX best practices

## 🎨 Layout Approach & Responsiveness

**Layout Approach**: Used CSS Flexbox for consistent card heights and content distribution, with a clean card-based design featuring hover animations and visual hierarchy through typography and spacing.

**Responsiveness**: Implemented mobile-first responsive design with Bootstrap grid system (3 columns on desktop, 2 on tablet, 1 on mobile) and adaptive component sizing for optimal viewing across all devices.

## 🚀 Demo Access

- **Local Demo**: Navigate to `/product-cards` route after starting the application
- **Live Demo**: [Netlify Deployment](https://ecommerce-514.netlify.app/)

## 🛠️ Technical Implementation

The Product Card component includes:
- Dynamic variant selection with stock checking
- Responsive grid layout using Bootstrap
- Toast notifications for user feedback
- Redux integration for cart management
- CSS animations and hover effects

## Run Locally

Clone the project

```bash
  git clone https://dredsoftlabs-admin@bitbucket.org/dredsoftlabs/ecommerce.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

## 📱 View Product Cards Demo

To view the Product Card demo that was created for this assessment:

1. Start the application with `npm start`
2. Navigate to `http://localhost:3000/product-cards`
3. View the responsive product cards with variant selection and stock management

## 🚀 Deployment

This project is deployed on **Netlify** with the following configuration:

- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Node.js Version**: 18.18.0 (specified in `.nvmrc`)
- **SPA Routing**: Configured with redirects for React Router

### Deployment URL
**Live Demo**: [https://ecommerce-514.netlify.app/](https://ecommerce-514.netlify.app/)

### Key Features Working in Production
- ✅ Responsive Product Card UI
- ✅ Variant selection with stock management
- ✅ Add to Cart functionality
- ✅ Mobile-first responsive design
- ✅ Cross-browser compatibility

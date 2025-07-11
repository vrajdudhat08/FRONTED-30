import React from 'react';

const GlobalStyles = () => (
  <style jsx="true" global="true">{`
    :root {
      --gold: #D4AF37;
      --dark-gold: #B8860B;
      --black: #1a1a1a;
      --light-gray: #f8f9fa;
      --medium-gray: #6c757d;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Georgia', serif;
      background-color: var(--light-gray);
      color: var(--black);
      line-height: 1.6;
    }

    .luxury-text {
      font-family: 'Georgia', serif;
      font-weight: 300;
      letter-spacing: 2px;
    }

    .gold-accent {
      color: var(--gold);
    }

    .btn-luxury {
      background: linear-gradient(45deg, var(--gold), var(--dark-gold));
      border: none;
      color: white;
      padding: 12px 30px;
      border-radius: 0;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .btn-luxury:hover {
      background: linear-gradient(45deg, var(--dark-gold), var(--gold));
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
    }

    .card-luxury {
      border: none;
      border-radius: 0;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }

    .card-luxury:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }

    .hero-section {
      height: 100vh;
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.4);
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      color: white;
    }

    .product-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transition: all 0.3s ease;
    }

    .product-card {
      cursor: pointer;
      overflow: hidden;
    }

    .product-card:hover .product-image {
      transform: scale(1.1);
    }

    .navbar-luxury {
      background: rgba(26, 26, 26, 0.95) !important;
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--gold);
    }

    .navbar-brand {
      font-size: 1.8rem;
      font-weight: 300;
      letter-spacing: 3px;
      color: var(--gold) !important;
    }

    .nav-link {
      color: white !important;
      font-weight: 300;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin: 0 15px;
      transition: all 0.3s ease;
    }

    .nav-link:hover {
      color: var(--gold) !important;
      transform: translateY(-2px);
    }

    .footer-luxury {
      background: var(--black);
      color: white;
      padding: 50px 0;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 300;
      text-align: center;
      margin-bottom: 50px;
      position: relative;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 2px;
      background: var(--gold);
    }

    .testimonial-card {
      background: white;
      padding: 30px;
      border-left: 4px solid var(--gold);
      margin: 20px 0;
    }

    @media (max-width: 768px) {
      .hero-section {
        height: 70vh;
      }
      .section-title {
        font-size: 2rem;
      }
      .navbar-brand {
        font-size: 1.4rem;
      }
    }
  `}</style>
);

export default GlobalStyles;

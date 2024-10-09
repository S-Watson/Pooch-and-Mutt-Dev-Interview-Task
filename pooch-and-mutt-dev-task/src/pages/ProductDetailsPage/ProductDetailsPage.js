import React from 'react';
import './ProductDetailsPage.css';
import ProductImageGallery from '../../components/ProductImageGallery/ProductImageGallery';
import ProductDetailsSection from '../../components/ProductDetailsSection/ProductDetailsSection';
import NewsletterSubscription from '../../components/NewsletterSubscription/NewsletterSubscription';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

function ProductDetailsPage() {
  return (
    <div className="mx-auto lg:py-7 px-4 md:px-0">
      <MobileLayout />
      <DesktopLayout />
    </div>
  );
}

function MobileLayout() {
  return (
    <div className="block md:hidden">
      <div className="container mb-4">
        <Breadcrumb />
      </div>

      <div className="w-screen relative left-1/2 transform -translate-x-1/2">
        <ProductImageGallery />
      </div>

      <div className="container mt-6">
        <ProductDetailsSection />
        <NewsletterSubscription />
      </div>
    </div>
  );
}

function DesktopLayout() {
  return (
    <div className="container w-full hidden md:grid lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-8 md:my-8 lg:my-0">
        <ProductImageGallery />
      </div>

      <div className="lg:col-span-4">
        <Breadcrumb />
        <ProductDetailsSection />
        <NewsletterSubscription />
      </div>
    </div>
  );
}

export default ProductDetailsPage;

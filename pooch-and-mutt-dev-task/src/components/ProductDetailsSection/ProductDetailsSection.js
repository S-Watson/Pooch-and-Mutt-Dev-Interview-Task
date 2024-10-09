import React, { useState } from 'react';
import ProductRating from '../ProductRating/ProductRating';
import Button from '../Button/Button';
import Select from '../Select/Select';
import Radio from '../Radio/Radio';

function ProductDetailsSection() {
  // TODO: Replace the following hard coded values with real data
  const quantityOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
  ];

  const frequencyOptions = [
    { value: '30', label: '30 days' },
    { value: '60', label: '60 days' },
    { value: '90', label: '90 days' },
  ];

  const [selectedPurchaseType, setSelectedPurchaseType] = useState('subscription');

  return (
    <div>
      <h1 className="lg:text-h1 text-h2">Health & Digestion Dry Food</h1>

      <ProductRating rating={4.5} ratingCount={48} />

      <div className="flex items-center mb-2">
        {selectedPurchaseType === 'subscription' && <p className="text-h3 text-brand mr-2">£6.37</p>}
        <span className={`text-primary mr-2 ${selectedPurchaseType === 'subscription' ? 'line-through text-p1' : 'text-h3'}`}>£8.49</span>
        <span className="text-brand text-s2">{selectedPurchaseType === 'subscription' ? '+18 PoochPoints' : '+8 PoochPoints'}</span>
      </div>

      <div className="lg:mt-8 mt-7">
        <div>
          <Select
            id="quantity"
            label="Quantity"
            options={quantityOptions}
            className="mt-7"
          />
        </div>

        <div className="bg-surface-brand p-6 border border-border-minimal rounded-md mt-6">
          <label className="block text-s1 text-primary">Subscribe & Save 25%!</label>
          <div className="mt-6 ml-0 md:flex md:space-x-3">
            <Radio
              id="subscription"
              value="subscription"
              label="Subscription"
              name="purchaseType"
              checked={selectedPurchaseType === 'subscription'}
              onChange={setSelectedPurchaseType}
              className="md:w-1/2 w-full"
            />
            <Radio
              id="one-off"
              value="one-off"
              label="One-off"
              name="purchaseType"
              checked={selectedPurchaseType === 'one-off'}
              onChange={setSelectedPurchaseType}
              className="md:w-1/2 w-full md:pt-0 pt-4"
            />
          </div>

          <div className="mt-6">
            <Select
              id="frequency"
              label="Delivery Frequency"
              options={frequencyOptions}
              disabled={selectedPurchaseType === 'one-off'}
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-6 pt-5 pb-8 bg-white md:relative md:mt-6 md:p-0 add-to-cart-btn">
        <Button variant="primary" className="!md:mt-8 !mt-0 !w-full">Add to Basket</Button>
      </div>

      <div className="md:mt-8 mt-7 text-secondary">
        <p className="text-p2">Grain-free, junk-free complete dry food for sensitive dogs</p>
        <div className="ml-4">
          <ul className="list-disc list-outside mt-2 text-p2 pl-6">
            <li>Hypoallergenic</li>
            <li>Vet recommended</li>
            <li>Prebiotics for gut health</li>
          </ul>
        </div>
        <hr className="md:hidden md:mt-0 mt-7" />
      </div>
    </div>
  );
}

export default ProductDetailsSection;

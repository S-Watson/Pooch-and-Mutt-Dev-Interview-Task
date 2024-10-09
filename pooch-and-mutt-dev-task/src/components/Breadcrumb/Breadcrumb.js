import React from 'react';

function Breadcrumb() {
  return (
    // TODO: Link to real data
    <nav className="text-c1 my-2 lg:mb-6 lg:mt-0">
      <a href="#shop" className="hover:underline text-minimal">Shop all</a>
      <span className="mx-2">{'>'}</span>
      <a href="#shop#dry-dog-food" className="hover:underline text-minimal">Dry Dog Food</a>
      <span className="mx-2">{'>'}</span>
      <span className="text-secondary">Health & Digestion Dry Food</span>
    </nav>
  );
}

export default Breadcrumb;
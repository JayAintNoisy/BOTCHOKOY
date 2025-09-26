import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onSelect }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8, totalItems = 24;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const productsForPage = products
    .slice(0, totalItems)
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsForPage.map((p) => (
          <ProductCard key={p.id} product={p} onSelect={onSelect} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
        >
          ← Previous
        </button>
        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

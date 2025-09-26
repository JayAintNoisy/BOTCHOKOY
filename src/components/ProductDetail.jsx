import React, { useState } from "react";

export default function ProductDetail({ product, onBack, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isDancing, setIsDancing] = useState(false);
  const total = (product.price * quantity).toFixed(2);

  const handleDance = () => {
    setIsDancing(true);
    setTimeout(() => setIsDancing(false), 1000); // reset after 1s
  };

  return (
    <div className="p-6 border rounded-xl shadow-lg bg-white max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          onClick={handleDance}
          className={`w-64 h-64 object-contain border rounded-lg cursor-pointer ${
            isDancing ? "animate-dance" : ""
          }`}
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <p className="mt-4 text-xl font-semibold text-green-700">
            ${product.price}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Brand: <span className="font-medium">{product.brand}</span> | Category:{" "}
            <span className="font-medium">{product.category}</span>
          </p>
          <p className="text-sm mt-1">Rating: ⭐ {product.rating}</p>

          {/* Quantity */}
          <div className="flex items-center mt-4">
            <label className="mr-2 font-medium">Qty:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
              className="w-16 border rounded p-1 text-center"
            />
          </div>

          {/* ✅ Only Add to Cart button */}
          <div className="mt-6">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>

          <p className="mt-4 text-lg font-semibold">Total: ${total}</p>
        </div>
      </div>
    </div>
  );
}

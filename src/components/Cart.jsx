import React, { useState } from "react";

export default function Cart({ cart, setCart }) {
  const [success, setSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  // ✅ Buy Now Function
  const handleBuy = () => {
    if (cart.length === 0) return;
    setCart([]); // clear the cart
    setSuccess(true); // show success message
    setTimeout(() => setSuccess(false), 3000); // hide after 3s
  };

  return (
    <div className="w-64 p-4 bg-white border rounded-2xl shadow-xl transform -rotate-1 hover:rotate-0 transition duration-300">
      <h2 className="font-bold text-lg mb-3">🛍️ Cart</h2>

      {success && (
        <p className="text-green-600 text-sm font-semibold mb-2">
          ✅ Successfully purchased!
        </p>
      )}

      {cart.length === 0 ? (
        <p className="text-gray-400 text-sm italic">Your basket is empty</p>
      ) : (
        <>
          <ul className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {cart.map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-center text-sm bg-gray-50 p-2 rounded-lg shadow-sm hover:shadow-md"
              >
                <span className="truncate w-28">{item.title}</span>
                <span className="font-semibold text-gray-700">${item.price}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-2 text-sm flex justify-between font-bold text-gray-800">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          {/* ✅ Buy Now Button */}
          <button
            onClick={handleBuy}
            className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
}

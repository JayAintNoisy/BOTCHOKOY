import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import SearchFilter from "./components/SearchFilter";
import Cart from "./components/Cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Promise.all([
      fetch("https://dummyjson.com/products/category/laptops").then((res) => res.json()),
      fetch("https://dummyjson.com/products/category/smartphones").then((res) => res.json()),
      fetch("https://dummyjson.com/products/category/groceries").then((res) => res.json()),
      fetch("https://dummyjson.com/products/category/skincare").then((res) => res.json()),
    ]).then(([laptops, phones, groceries, skincare]) => {
      let allProducts = [
        ...laptops.products,
        ...phones.products,
        ...groceries.products,
        ...skincare.products,
      ];
      allProducts = allProducts.slice(0, 50); // limit to 50 max
      setProducts(allProducts);
    });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* ✅ Centered Title */}
      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-bold mb-6">
          🛒 E-Commerce Shop
        </h1>
      </div>

      <SearchFilter search={search} setSearch={setSearch} />

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          {selected ? (
            <ProductDetail
              product={selected}
              onBack={() => setSelected(null)}
              addToCart={addToCart}
            />
          ) : (
            <ProductList products={filtered} onSelect={setSelected} />
          )}
        </div>
        <div>
          <Cart cart={cart} setCart={setCart} />

        </div>
      </div>
    </div>
  );
}

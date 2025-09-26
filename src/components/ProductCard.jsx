export default function ProductCard({ product, onSelect }) {
  return (
    <div
      className="border rounded-lg p-3 shadow hover:shadow-lg cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded" />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-600">${product.price}</p>
    </div>
  );
}

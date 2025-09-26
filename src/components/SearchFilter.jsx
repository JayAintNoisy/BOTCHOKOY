export default function SearchFilter({ search, setSearch }) {
  return (
    <div className="mb-6">
      <div className="relative">
        {/* Search Icon (emoji, no library needed) */}
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        {/* Input field */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 
                     border border-gray-300 focus:border-blue-500 
                     focus:ring-2 focus:ring-blue-400 focus:outline-none 
                     transition-all"
        />
      </div>
    </div>
  );
}

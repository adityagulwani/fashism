import ProductGrid from './ProductGrid';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to Fashism
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Discover Your Style, Define Your Fashion
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Product Grid Section */}
      <ProductGrid />
    </main>
  );
}

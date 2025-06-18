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

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured items will go here */}
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Collection 1</h3>
              <p className="text-gray-600">Discover our latest trends</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Collection 2</h3>
              <p className="text-gray-600">Explore unique styles</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Collection 3</h3>
              <p className="text-gray-600">Find your perfect look</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

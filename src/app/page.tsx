export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <header className="flex justify-between items-center pb-6 border-b">
        <h1 className="text-4xl font-bold">Library</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Request
        </button>
      </header>

      <main className="mt-8 space-y-6">
        <p className="text-gray-600 text-center">
          Browse for assets needed to report and present analysis.
        </p>

        <input
          type="text"
          placeholder="Type to search..."
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Featured
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            KPI
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Layouts
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Storyboards
          </button>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Featured</h2>
          <p className="text-sm text-gray-500 mb-4">Curated top picks from this week.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="p-4 border rounded shadow hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg">Item Name</h3>
                <p className="text-sm text-gray-500">
                  Short description of the item goes nicely here.
                </p>
                <span className="text-xs text-gray-400">06/27/2024</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Trending</h2>
          <p className="text-sm text-gray-500 mb-4">Most popular by community.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="p-4 border rounded shadow hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg">Item Name</h3>
                <p className="text-sm text-gray-500">
                  Short description of the item goes nicely here.
                </p>
                <span className="text-xs text-gray-400">06/27/2024</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

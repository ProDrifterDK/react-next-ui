import SearchIcon from "../icons/SearchIcon";
import RequestIcon from "../icons/RequestIcon";
import CardIcon from "../icons/CardIcon";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-foreground flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-end p-4">
        <button className="bg-[#63738A] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#4e5c6e]">
          <RequestIcon fill="white" />
          Request
        </button>
      </div>
      <h1 className="text-5xl font-bold mb-6 text-black">Library</h1>
      <div className="w-full max-w-5xl px-6 sm:px-8 lg:px-12 space-y-12">
        <p className="text-gray-600 text-center text-lg">
          Browse for assets needed to report and present analysis.
        </p>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        <div className="flex justify-between gap-4 bg-gray-100 rounded-md shadow-sm p-2">
          <button className="px-16 py-2 bg-white text-gray-900 rounded-md font-medium">
            Featured
          </button>
          <button className="px-16 py-2 text-gray-500 hover:text-gray-900">
            KPI
          </button>
          <button className="px-16 py-2 text-gray-500 hover:text-gray-900">
            Layouts
          </button>
          <button className="px-16 py-2 text-gray-500 hover:text-gray-900">
            Storyboards
          </button>
        </div>
        <section>
          <h2 className="text-3xl font-semibold mb-2 text-black">Featured</h2>
          <p className="text-sm text-gray-500 mb-4">Curated top picks from this week.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-[auto_1fr] gap-4 p-6 min-h-[120px] border rounded-lg shadow hover:shadow-md transition bg-white"
              >
                <div
                  className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <CardIcon className="w-12 h-12 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Item Name</h3>
                  <p className="text-sm text-gray-500">
                    Short description of the item goes nicely here.
                  </p>
                  <span className="text-xs text-gray-400">06/27/2024</span>
                </div>
              </div>

            ))}
          </div>
        </section>
        <section className="pb-6">
          <h2 className="text-3xl font-semibold mb-2 text-black">Trending</h2>
          <p className="text-sm text-gray-500 mb-4">Most popular by community.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-[auto_1fr] gap-4 p-6 min-h-[120px] border rounded-lg shadow hover:shadow-md transition bg-white"
              >
                <div
                  className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <CardIcon className="w-12 h-12 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Item Name</h3>
                  <p className="text-sm text-gray-500">
                    Short description of the item goes nicely here.
                  </p>
                  <span className="text-xs text-gray-400">06/27/2024</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

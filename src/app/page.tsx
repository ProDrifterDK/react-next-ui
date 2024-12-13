'use client';

import { useState, useRef, useEffect } from "react";
import SearchIcon from "../icons/SearchIcon";
import RequestIcon from "../icons/RequestIcon";
import CardIcon from "../icons/CardIcon";
import ClearIcon from "../icons/ClearIcon";
import useModalStore from "../store/useModalStore";
import { ModalItem } from "@/types/ModalItem";
import AssetModal from "@/components/AssetModal";
import KpiModal from "@/components/KpiModal";
import LayoutModal from "@/components/LayoutModal";
import StoryboardModal from "@/components/StoryboardModal";
import DataVizModal from "@/components/DataVizModal";
import { featuredData, kpiData, layoutData, storyboardData, trendingData } from "@/mock/data";
import AccessRequestModal from "@/components/AccessRequestModal";

export default function Home() {
  const {
    openModal,
    openKpiModal,
    openLayoutModal,
    openStoryboardModal,
    selectItem,
    openAccessRequestModal
  } = useModalStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [currentTab, setCurrentTab] = useState<"featured" | "kpi" | "layouts" | "storyboards">("featured");

  const [filteredFeaturedResults, setFilteredFeaturedResults] = useState<ModalItem[]>(featuredData.slice(0, 4));
  const [filteredTrendingResults, setFilteredTrendingResults] = useState<ModalItem[]>(trendingData.slice(0, 4));
  const [expandedSections, setExpandedSections] = useState({
    featured: false,
    trending: false,
  });

  const [filteredResults, setFilteredResults] = useState<ModalItem[]>([]);
  const [expandedTab, setExpandedTab] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const getDataForTab = (tab: "featured" | "kpi" | "layouts" | "storyboards") => {
    switch (tab) {
      case "featured":
        return featuredData;
      case "kpi":
        return kpiData;
      case "layouts":
        return layoutData;
      case "storyboards":
        return storyboardData;
      default:
        return featuredData;
    }
  };

  const filterDataForFeatured = (query: string) => {
    const filteredFeatured = featuredData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some((tag: string) => tag.toLowerCase().includes(query.toLowerCase()))
    );

    const filteredTrending = trendingData.filter((item: ModalItem) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some((tag: string) => tag.toLowerCase().includes(query.toLowerCase()))
    );

    setFilteredFeaturedResults(filteredFeatured);
    setFilteredTrendingResults(filteredTrending);
  };

  const filterData = (query: string) => {
    if (currentTab === "featured") {
      filterDataForFeatured(query);
    } else {
      const data = getDataForTab(currentTab);
      const filtered = data.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredResults(filtered);
    }
  };

  const handleShowMore = (section?: "featured" | "trending") => {
    if (currentTab === "featured" && section) {
      setExpandedSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
      if (!expandedSections[section]) {
        if (section === "featured") {
          setFilteredFeaturedResults(featuredData);
        } else {
          setFilteredTrendingResults(trendingData);
        }
      } else {
        if (section === "featured") {
          setFilteredFeaturedResults(featuredData.slice(0, 4));
        } else {
          setFilteredTrendingResults(trendingData.slice(0, 4));
        }
      }
    } else if (currentTab !== "featured") {
      if (!expandedTab) {
        setFilteredResults(getDataForTab(currentTab));
        setExpandedTab(true);
      } else {
        setFilteredResults(getDataForTab(currentTab).slice(0, 4));
        setExpandedTab(false);
      }
    }
  };

  const scrollToSearchBar = () => {
    searchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setIsDropdownVisible(true);

    if (!query.trim()) {
      if (currentTab === "featured") {
        setFilteredFeaturedResults(featuredData.slice(0, 4));
        setFilteredTrendingResults(trendingData.slice(0, 4));
        setExpandedSections({ featured: false, trending: false });
      } else {
        setFilteredResults(getDataForTab(currentTab).slice(0, 4));
        setExpandedTab(false);
      }
    }
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchQuery.trim().length > 1) {
        setRecentSearches((prev) =>
          Array.from(new Set([searchQuery, ...prev])).slice(0, 5)
        );
        filterData(searchQuery);
      } else {
        if (currentTab === "featured") {
          setFilteredFeaturedResults(featuredData.slice(0, 4));
          setFilteredTrendingResults(trendingData.slice(0, 4));
          setExpandedSections({ featured: false, trending: false });
        } else {
          setFilteredResults(getDataForTab(currentTab).slice(0, 4));
          setExpandedTab(false);
        }
      }
      setIsDropdownVisible(false);
    }
  };

  const handleRecentSearchSelect = (search: string) => {
    setSearchQuery(search);
    filterData(search);
    setIsDropdownVisible(false);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    if (currentTab === "featured") {
      setFilteredFeaturedResults(featuredData.slice(0, 4));
      setFilteredTrendingResults(trendingData.slice(0, 4));
      setExpandedSections({ featured: false, trending: false });
    } else {
      setFilteredResults(getDataForTab(currentTab).slice(0, 4));
      setExpandedTab(false);
    }
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSearchQuery("");
    if (currentTab === "featured") {
      setFilteredFeaturedResults(featuredData.slice(0, 4));
      setFilteredTrendingResults(trendingData.slice(0, 4));
      setExpandedSections({ featured: false, trending: false });
    } else {
      setFilteredResults(getDataForTab(currentTab).slice(0, 4));
      setExpandedTab(false);
    }
  }, [currentTab]);

  const renderCards = (data: ModalItem[]) =>
    data.map((item) => (
      <div
        key={item.id}
        className="grid grid-cols-[auto_1fr] gap-4 p-6 min-h-[120px] border rounded-lg shadow hover:shadow-md transition bg-white cursor-pointer"
        onClick={() => {
          switch (currentTab) {
            case 'featured':
              openModal(item);
              break;
            case 'kpi':
              selectItem(item);
              openKpiModal();
              break;
            case 'layouts':
              selectItem(item);
              openLayoutModal();
              break;
            case 'storyboards':
              selectItem(item);
              openStoryboardModal();
              break;
            default:
              break;
          }
        }}
      >
        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
          <CardIcon className="w-12 h-12 text-gray-500" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-black">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
          <span className="text-xs text-gray-400">{item.metrics.lastUpdated}</span>
        </div>
      </div>
    ));

  let noResults = false;

  if (currentTab === "featured") {
    noResults =
      filteredFeaturedResults.length === 0 && filteredTrendingResults.length === 0;
  } else {
    noResults = filteredResults.length === 0;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-foreground flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-end p-4">
        <button
          className="bg-[#63738A] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#4e5c6e]"
          aria-label="Make a Request"
          onClick={openAccessRequestModal}
        >
          <RequestIcon fill="white" />
          Request
        </button>
      </div>
      <h1 className="text-5xl font-bold mb-6 text-black">Library</h1>
      <div className="w-full max-w-5xl px-6 sm:px-8 lg:px-12 space-y-12">
        <p className="text-gray-600 text-center text-lg">
          Browse for assets needed to report and present analysis.
        </p>
        <div className="flex justify-between gap-4 bg-gray-100 rounded-md shadow-sm p-2">
          <button
            className={`px-16 py-2 rounded-md font-medium ${currentTab === "featured" ? "bg-white text-gray-900" : "text-gray-500 hover:text-gray-900"
              }`}
            onClick={() => setCurrentTab("featured")}
            aria-label="Show Featured tab"
          >
            Featured
          </button>
          <button
            className={`px-16 py-2 rounded-md font-medium ${currentTab === "kpi" ? "bg-white text-gray-900" : "text-gray-500 hover:text-gray-900"
              }`}
            onClick={() => setCurrentTab("kpi")}
            aria-label="Show KPI tab"
          >
            KPI
          </button>
          <button
            className={`px-16 py-2 rounded-md font-medium ${currentTab === "layouts" ? "bg-white text-gray-900" : "text-gray-500 hover:text-gray-900"
              }`}
            onClick={() => setCurrentTab("layouts")}
            aria-label="Show Layouts tab"
          >
            Layouts
          </button>
          <button
            className={`px-16 py-2 rounded-md font-medium ${currentTab === "storyboards" ? "bg-white text-gray-900" : "text-gray-500 hover:text-gray-900"
              }`}
            onClick={() => setCurrentTab("storyboards")}
            aria-label="Show Storyboards tab"
          >
            Storyboards
          </button>
        </div>
        <div ref={searchRef} className="relative w-full mb-4">
          <input
            type="text"
            placeholder="Type to search..."
            value={searchQuery}
            onChange={handleSearchInput}
            onKeyDown={handleSearchSubmit}
            onFocus={() => setIsDropdownVisible(true)}
            className="w-full p-3 pl-10 pr-10 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              type="button"
              aria-label="Clear search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <ClearIcon className="h-5 w-5" />
            </button>
          )}
          {isDropdownVisible && recentSearches.length > 0 && (
            <ul className="absolute z-10 bg-white border rounded-md shadow-md w-full mt-2 max-h-40 overflow-y-auto" role="listbox">
              {recentSearches
                .filter((search) =>
                  search.toLowerCase().startsWith(searchQuery.toLowerCase())
                )
                .map((search, index) => (
                  <li
                    key={index}
                    onClick={() => handleRecentSearchSelect(search)}
                    className="p-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                    role="option"
                    aria-selected="false"
                  >
                    {search}
                  </li>
                ))}
            </ul>
          )}
        </div>
        {noResults ? (
          <p className="text-center text-gray-600 text-lg">
            No results found. Try refining your search.
          </p>
        ) : (
          <>
            {currentTab === "featured" ? (
              <>
                {filteredFeaturedResults.length > 0 && (
                  <section>
                    <h2 className="text-3xl font-semibold mb-2 text-black">Featured</h2>
                    <p className="text-sm text-gray-500 mb-4">Curated top picks from this week.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                      {renderCards(filteredFeaturedResults)}
                    </div>
                    {searchQuery.trim() === "" && (
                      <>
                        <button
                          onClick={() => handleShowMore("featured")}
                          className="mt-4 text-blue-500 hover:underline"
                        >
                          {expandedSections.featured ? "Show less" : "Show more"}
                        </button>
                        {expandedSections.featured && (
                          <button
                            onClick={scrollToSearchBar}
                            className="mt-4 text-gray-500 hover:underline block"
                          >
                            Not seeing what you&apos;re looking for? Try searching it
                          </button>
                        )}
                      </>
                    )}
                  </section>
                )}
                {filteredTrendingResults.length > 0 && (
                  <section className="pb-6">
                    <h2 className="text-3xl font-semibold mb-2 text-black">Trending</h2>
                    <p className="text-sm text-gray-500 mb-4">Most popular by community.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                      {renderCards(filteredTrendingResults)}
                    </div>
                    {searchQuery.trim() === "" && (
                      <>
                        <button
                          onClick={() => handleShowMore("trending")}
                          className="mt-4 text-blue-500 hover:underline"
                        >
                          {expandedSections.trending ? "Show less" : "Show more"}
                        </button>
                        {expandedSections.trending && (
                          <button
                            onClick={scrollToSearchBar}
                            className="mt-4 text-gray-500 hover:underline block"
                          >
                            Not seeing what you&apos;re looking for? Try searching it
                          </button>
                        )}
                      </>
                    )}
                  </section>
                )}
              </>
            ) : (
              <>
                {filteredResults.length > 0 && (
                  <section>
                    <h2 className="text-3xl font-semibold mb-2 text-black">
                      {currentTab === "kpi"
                        ? "KPI"
                        : currentTab === "layouts"
                          ? "Layouts"
                          : "Storyboards"}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      {currentTab === "kpi"
                        ? "Key Performance Indicators for your analysis."
                        : currentTab === "layouts"
                          ? "Explore various layout designs."
                          : "Visual sequences and narratives."}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                      {renderCards(filteredResults)}
                    </div>
                    {searchQuery.trim() === "" &&
                      filteredResults.length > 0 &&
                      (expandedTab || filteredResults.length !== getDataForTab(currentTab).length) && (
                        <>
                          <button
                            onClick={() => handleShowMore()}
                            className="mt-4 text-blue-500 hover:underline"
                          >
                            {expandedTab ? "Show less" : "Show more"}
                          </button>
                          {expandedTab && (
                            <button
                              onClick={scrollToSearchBar}
                              className="mt-4 text-gray-500 hover:underline block"
                            >
                              Not seeing what you&apos;re looking for? Try searching it
                            </button>
                          )}
                        </>
                      )}
                  </section>
                )}
              </>
            )}
          </>
        )}
      </div>
      <AssetModal />
      <KpiModal />
      <LayoutModal />
      <StoryboardModal />
      <DataVizModal />
      <AccessRequestModal />
    </div>
  );
}

import { useState, useEffect } from "react";
import {
  FaBookmark,
  FaEye,
  FaCalendarAlt,
  FaClock,
  FaExternalLinkAlt,
} from "react-icons/fa";

function HeaderData() {
  const [activeCard, setActiveCard] = useState(null);
  const [bookmarked, setBookmarked] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const cards = [
    {
      id: 1,
      title: "UP Police SI Online Form",
      posts: 4543,
      lastDate: "2023-11-30",
      category: "Police Jobs",
      color: "bg-gradient-to-r from-red-600 to-red-700",
      status: "active",
      views: 12453,
    },
    {
      id: 2,
      title: "BSF HC RO / RM Form",
      posts: 1121,
      lastDate: "2025-12-15",
      category: "Defense Jobs",
      color: "bg-gradient-to-r from-orange-500 to-orange-600",
      status: "active",
      views: 8765,
    },
    {
      id: 3,
      title: "BSSC Office Attendant Form",
      posts: 3727,
      lastDate: "2023-12-05",
      category: "Government Jobs",
      color: "bg-gradient-to-r from-pink-500 to-pink-600",
      status: "active",
      views: 10234,
    },
    {
      id: 4,
      title: "LIC AAO / AE Online Form 2025",
      posts: 650,
      lastDate: "2024-01-10",
      category: "Banking/Insurance",
      color: "bg-gradient-to-r from-blue-800 to-blue-900",
      status: "upcoming",
      views: 7562,
    },
    {
      id: 5,
      title: "IB JIO-II/ Tech Online Form 2025",
      posts: 892,
      lastDate: "2024-01-20",
      category: "Intelligence",
      color: "bg-gradient-to-r from-emerald-600 to-emerald-700",
      status: "upcoming",
      views: 6231,
    },
    {
      id: 6,
      title: "RRB Section Controller Online Form",
      posts: 3210,
      lastDate: "2023-11-25",
      category: "Railway Jobs",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      status: "active",
      views: 15321,
    },
    {
      id: 7,
      title: "UP Scholarship Online Form 2025-26",
      posts: 0,
      lastDate: "2024-02-15",
      category: "Scholarship",
      color: "bg-gradient-to-r from-red-800 to-red-900",
      status: "upcoming",
      views: 4321,
    },
    {
      id: 8,
      title: "UP Police Constable Form",
      posts: 19220,
      lastDate: "2023-12-10",
      category: "Police Jobs",
      color: "bg-gradient-to-r from-green-700 to-green-800",
      status: "active",
      views: 18765,
    },
  ];

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };

  const daysRemaining = (dateString) => {
    const today = new Date();
    const targetDate = new Date(dateString);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const toggleBookmark = (id, e) => {
    e.stopPropagation();
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + "k";
    }
    return views;
  };

  return (
    <div className="px-4 py-6 md:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">
            Latest Government Job Updates
          </h2>
          <div className="flex items-center space-x-2 text-gray-600 text-sm md:text-base">
            <FaClock className="text-blue-500" />
            <span>
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            <span className="mx-2 hidden md:inline">•</span>
            <span className="hidden md:inline">
              {currentTime.toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="md:hidden">
              {currentTime.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.color} text-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden relative`}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="p-3 md:p-5 relative">
                <div className="flex justify-between items-start mb-2 md:mb-3">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      card.status === "active"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {card.status === "active" ? "Active" : "Upcoming"}
                  </span>
                  <button
                    onClick={(e) => toggleBookmark(card.id, e)}
                    className={`p-1 md:p-2 rounded-full ${
                      bookmarked[card.id]
                        ? "bg-yellow-400 text-yellow-900"
                        : "bg-white/20 hover:bg-white/30"
                    }`}
                  >
                    <FaBookmark
                      className={
                        bookmarked[card.id]
                          ? "fill-current text-xs md:text-base"
                          : "text-xs md:text-base"
                      }
                    />
                  </button>
                </div>

                <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2 leading-tight">
                  {card.title}
                </h3>

                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <span className="text-xs md:text-sm bg-black/20 px-1 md:px-2 py-1 rounded">
                    {card.category}
                  </span>
                  {card.posts > 0 && (
                    <span className="text-xs md:text-sm font-semibold">
                      {card.posts.toLocaleString()} Posts
                    </span>
                  )}
                </div>

                <div className="flex items-center text-xs md:text-sm mb-1 md:mb-2">
                  <FaCalendarAlt className="mr-1 md:mr-2 opacity-80 text-xs md:text-sm" />
                  <span>Last Date: {formatDate(card.lastDate)}</span>
                </div>

                <div className="flex items-center text-xs md:text-sm">
                  <FaEye className="mr-1 md:mr-2 opacity-80 text-xs md:text-sm" />
                  <span>{formatViews(card.views)} views</span>
                </div>

                <div className="mt-2 md:mt-4 pt-2 md:pt-3 border-t border-white/20 flex justify-between items-center">
                  <span className="text-xs md:text-sm font-medium">
                    {daysRemaining(card.lastDate) > 0
                      ? `${daysRemaining(card.lastDate)} days left`
                      : "Last day today!"}
                  </span>
                  <button className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 md:px-3 md:py-1 rounded-full flex items-center">
                    Apply Now <FaExternalLinkAlt className="ml-1 text-xs" />
                  </button>
                </div>
              </div>

              {/* Hover overlay with more details */}
              {activeCard === card.id && (
                <div className="absolute inset-0 bg-black/80 p-3 md:p-5 flex flex-col justify-center items-center transition-opacity">
                  <h4 className="font-bold text-sm md:text-lg mb-1 md:mb-2 text-center">
                    {card.title}
                  </h4>
                  <p className="text-xs md:text-sm text-center mb-2 md:mb-4">
                    {card.status === "active"
                      ? "Application process is currently active."
                      : "Application will start soon."}
                  </p>
                  <button className="bg-white text-gray-800 font-semibold px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-gray-100 transition text-xs md:text-sm">
                    View Details & Apply
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 md:px-6 rounded-lg transition text-sm md:text-base">
            View All Job Notifications
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderData;

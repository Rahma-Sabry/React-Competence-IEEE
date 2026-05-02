// src/pages/Events.jsx

import { useState } from "react";
import EventCard from "../components/Eventcard";
import { initialEvents } from "../data/events";

function Events() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // get unique categories from events dynamically
  const categories = ["All", ...new Set(initialEvents.map((e) => e.category))];

  // filter by both search and category
  const filteredEvents = initialEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mt-5">

      {/* Search + Filter Row */}
      <div className="row g-2 mb-4">

        {/* Search Bar */}
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Dropdown */}
        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Results count */}
      <p className="text-muted">{filteredEvents.length} event(s) found</p>

      {/* Cards */}
      <div className="row g-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className="col-md-3" key={event.id}>
              <EventCard
                id={event.id}
                title={event.title}
                category={event.category}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-muted mt-4">No events match your search.</p>
        )}
      </div>

    </div>
  );
}

export default Events;
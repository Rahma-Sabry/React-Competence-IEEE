// src/components/EventCard.jsx

import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventContext";

function EventCard({ id, title, category, date, time, location, description }) {
  const navigate = useNavigate();
  const { registeredEvents, registerEvent, favorites, toggleFavorite } = useEvents();

  const isRegistered = registeredEvents.includes(id);
  const isFavorited = favorites.includes(id);

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">

        {/* Top row: badge + heart */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-primary">{category}</span>
          <button
            className="btn btn-sm border-0"
            onClick={() => toggleFavorite(id)}
          >
            {isFavorited ? "❤️" : "🤍"}
          </button>
        </div>

        {/* Title */}
        <h5 className="card-title fw-bold">{title}</h5>

        {/* Date + Time + Location */}
        <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: "0.85rem" }}>
          {date} | {time} | {location}
        </h6>

        {/* Description */}
        <p className="card-text" style={{ fontSize: "0.9rem" }}>
          {description}
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => navigate(`/events/${id}`)}
          >
            Details
          </button>

          <button
            className={`btn btn-sm ${isRegistered ? "btn-success" : "btn-primary"}`}
            onClick={() => registerEvent(id)}
            disabled={isRegistered}
          >
            {isRegistered ? "✓ Registered" : "Register"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default EventCard;
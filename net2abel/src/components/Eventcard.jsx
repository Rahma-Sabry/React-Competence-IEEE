// src/components/EventCard.jsx

function EventCard({ title, category, date, location, description }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">

        {/* Top row: badge + heart */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-primary">{category}</span>
          <button className="btn btn-sm border-0">🤍</button>
        </div>

        {/* Title */}
        <h5 className="card-title fw-bold">{title}</h5>

        {/* Date + Location */}
        <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: "0.85rem" }}>
          {date} | {location}
        </h6>

        {/* Description */}
        <p className="card-text" style={{ fontSize: "0.9rem" }}>
          {description}
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button className="btn btn-sm btn-outline-secondary">Details</button>
          <button className="btn btn-sm btn-primary">Register</button>
        </div>

      </div>
    </div>
  );
}

export default EventCard;
// src/pages/EventDetails.jsx

import { useParams, useNavigate } from "react-router-dom";
import { initialEvents } from "../data/events";
import { useEvents } from "../context/EventContext";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { registeredEvents, registerEvent } = useEvents();

  const event = initialEvents.find((e) => e.id === Number(id));

  // check if already registered
  const isRegistered = registeredEvents.includes(Number(id));

  if (!event) {
    return (
      <div className="text-center mt-5">
        <h4>Event not found!</h4>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="card shadow-sm p-4">
        <span className="badge bg-primary mb-2" style={{ width: "fit-content" }}>
          {event.category}
        </span>
        <h2 className="fw-bold">{event.title}</h2>
        <p className="text-muted">{event.date} | {event.time} | {event.location}</p>
        <hr />
        <p>{event.description}</p>
        <p><strong>Available Seats:</strong> {event.seats}</p>

        <button
          className={`btn mt-3 ${isRegistered ? "btn-success" : "btn-primary"}`}
          style={{ width: "fit-content" }}
          onClick={() => registerEvent(Number(id))}
          disabled={isRegistered}
        >
          {isRegistered ? "✓ Registered" : "Register"}
        </button>
      </div>
    </div>
  );
}

export default EventDetails;
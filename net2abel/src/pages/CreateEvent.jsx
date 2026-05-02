import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import ScrollToTopButton from "../components/Scrolltotop";

function CreateEvent() {

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    date: "",
    time: "",
    location: "",
    seats: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Event name is required";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    // Seats validation
    if (formData.seats === "") {
      newErrors.seats = "Seats are required";
    } else if (Number(formData.seats) < 0) {
      newErrors.seats = "Seats must be 0 or more";
    }

    // Date validation
    if (!formData.date) {
      newErrors.date = "Date is required";
    } else {
      const today = new Date();
      const selectedDate = new Date(formData.date);

      if (selectedDate < new Date(today.toDateString())) {
        newErrors.date = "Date cannot be in the past";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Event Created:", formData);
  };

  return (
    <>
      {/* ❗ FIX: component must start with capital letter */}
      <ScrollToTopButton />

      <Container style={{ maxWidth: "600px", marginTop: "90px", marginBottom: "90px" }}>
        <h2 className="text-center mb-4">Create Event</h2>

        <Form onSubmit={handleSubmit}>

          {/* Event Name */}
          <Form.Group className="mb-3">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Category */}
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              isInvalid={!!errors.category}
            >
              <option value="">Select category</option>
              <option value="tech">Tech</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
              <option value="education">Education</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Date */}
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              isInvalid={!!errors.date}
              min={new Date().toISOString().split("T")[0]}
            />
            <Form.Control.Feedback type="invalid">
              {errors.date}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Time */}
          <Form.Group className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              isInvalid={!!errors.time}
            />
            <Form.Control.Feedback type="invalid">
              {errors.time}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Location */}
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              isInvalid={!!errors.location}
            />
            <Form.Control.Feedback type="invalid">
              {errors.location}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Seats */}
          <Form.Group className="mb-3">
            <Form.Label>Seats</Form.Label>
            <Form.Control
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              isInvalid={!!errors.seats}
              min="0"
            />
            <Form.Control.Feedback type="invalid">
              {errors.seats}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-100"
            style={{ backgroundColor: "#788BFF", border: "none" }}
          >
            Create Event
          </Button>

        </Form>
      </Container>
    </>
  );
}

export default CreateEvent;
import React, { useState } from "react";
import service from "../../service/service.config";
import { useNavigate } from "react-router-dom";

const OfferForm = () => {
  const [offerName, setOfferName] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");
  const [schedules, setSchedules] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await service.post("/auth/business-offers", {
        offerName,
        description,
        availability,
        schedules,
        image,
      });
      console.log(response.data)
      navigate("/my-offers");
    } catch (error) {
      setError("Failed to create offer");
      console.error("Error creating offer:", error);
    }
  };

  return (
    <div className="offer-form-container">
      <h2>Create a New Offer</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Offer Name:
          <input
            type="text"
            value={offerName}
            onChange={(e) => setOfferName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Availability:
          <input
            type="text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </label>
        <label>
          Schedules:
          <input
            type="text"
            value={schedules}
            onChange={(e) => setSchedules(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default OfferForm;

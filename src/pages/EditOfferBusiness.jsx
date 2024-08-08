import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import service from "../../service/service.config";

const EditOfferPage = () => {
  const { offerId } = useParams();
  const navigate = useNavigate();
  const [offerName, setOfferName] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");
  const [schedules, setSchedules] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {

    const offerDetails = async () => {
      try {
        const response = await service.get(`/auth/business-offers/${offerId}`);
        const offerData = response.data;
        setOfferName(offerData.offerName);
        setDescription(offerData.description);
        setAvailability(offerData.availability);
        setSchedules(offerData.schedules);
        setImage(offerData.image);
        console.log(response)
      } catch (error) {
        setError("Failed to fetch offer details");
        console.error(error);
      }
    };

    offerDetails();
  }, [offerId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedOffer = {
        offerName,
        description,
        availability,
        schedules,
        image,
      };
      await service.put(`/auth/business-offers/${offerId}`, updatedOffer);
      navigate("/my-offers");
    } catch (error) {
      setError("Failed to update offer");
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await service.delete(`/auth/business-offers/${offerId}`);
      navigate("/my-offers");
    } catch (error) {
      setError("Failed to delete offer");
      console.error(error);
    }
  };
  return (
    <div>
      
      <h1>Edit Offer</h1> {error && <p>{error}</p>}
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
        <button type="submit">Update Offer</button>
      </form>
      <button
        onClick={handleDelete}
        style={{ marginTop: "20px", color: "red" }}
      >
        
        Delete Offer
      </button>
    </div>
  );
};
export default EditOfferPage;

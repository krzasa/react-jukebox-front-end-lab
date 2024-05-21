// Edit Route
// src/components/EditTrack.jsx

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditTrack() {
  // State to store the current values of the track
  const [track, setTrack] = useState({ title: "", artist: "" });
  // Hook to programmatically navigate to other routes
  const navigate = useNavigate();
  // Retrieve the ID from the URL
  const { id } = useParams();

  // Effect hook to load the track data when the component mounts
  useEffect(() => {
    fetchTrack();
  }, []);

  // Function to fetch track details from the server
  const fetchTrack = async () => {
    try {
      const response = await fetch(`http://localhost:3000/tracks/${id}`);
      const data = await response.json();
      setTrack({ title: data.title, artist: data.artist });
    } catch (error) {
      console.error("Error fetching the track:", error);
    }
  };

  // Handler for changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update track state with new values from the form
    setTrack((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Send a PUT request to update the track
      const response = await fetch(`http://localhost:3000/tracks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(track),
      });
      if (response.ok) {
        alert("Track updated successfully");
        // Navigate to the track detail page or any other page as needed
        navigate(`/tracks/${id}`);
      } else {
        throw new Error("Failed to update the track");
      }
    } catch (error) {
      console.error("Error updating the track:", error);
    }
  };

  return (
    <div>
      <h2>Edit Track</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={track.title}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Artist:
            <input
              type="text"
              name="artist"
              value={track.artist}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Update Track</button>
      </form>
    </div>
  );
}

export default EditTrack;

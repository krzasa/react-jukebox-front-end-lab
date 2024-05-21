// Delete Route
// src/components/TrackDetails.jsx

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // assuming you are using react-router

function TrackDetails({ match }) {
  const [track, setTrack] = useState(null);
  const history = useHistory();
  const trackId = match.params.id; // Getting the ID from URL if using React Router

  useEffect(() => {
    fetchTrack();
  }, []);

  const fetchTrack = async () => {
    try {
      const response = await fetch(`http://localhost:3000/tracks/${trackId}`);
      const data = await response.json();
      setTrack(data);
    } catch (error) {
      console.error('Error fetching the track:', error);
    }
  };

  const deleteTrack = async () => {
    try {
      const response = await fetch(`http://localhost:3000/tracks/${trackId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Track deleted successfully');
        history.push('/tracks'); // Redirect to another route, change according to your setup
      } else {
        throw new Error('Failed to delete the track');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Track Details</h2>
      {track ? (
        <div>
          <p>Title: {track.title}</p>
          <p>Artist: {track.artist}</p>
          <button onClick={deleteTrack}>Delete Track</button>
        </div>
      ) : (
        <p>Deleting the Song...</p>
      )}
    </div>
  );
}

export default TrackDetails;
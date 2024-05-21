import { useState } from 'react';

const trackForm = (props) => {
  const [formData, setFormData] = useState({
    track: '',
    artist: '',
  });

  // handleChange function to update formData state
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="track"> Track </label>
        <input
          id="track"
          name="track"
          value={formData.track}
          onChange={handleChange}
          required
        />
        <br></br>
        <label htmlFor="artist"> Artist </label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
     <br></br>
        <button type="submit">Add New Track</button>
      </form>
    </div>
  );
};

export default trackForm;

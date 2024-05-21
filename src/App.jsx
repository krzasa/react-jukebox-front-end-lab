import { useState, useEffect } from 'react';
import * as jukeboxService from './services/jukeboxService';
const App = () => {










  
  return <h1>Hello world!</h1>;
=======
const [trackList, setTrackList] = useState([])


useEffect(() => {
  const fetchTracks = async () => {
    try {
    const tracks = await jukeboxService.index();
    if (tracks.error) {
      throw new Error(tracks.error);
    }
    setTrackList(tracks);
  } catch (error) {
    console.log(error);
  }
  };
  fetchTracks();


}, []);
  // return <TrackList tracklist={trackList} />

};

export default App;
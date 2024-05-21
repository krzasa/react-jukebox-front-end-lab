import { useState, useEffect } from 'react';
import * as jukeboxService from './services/jukeboxService';
const App = () => {
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
  }, [])








  return (
  <h1>Hello world!</h1>
  );
  // return <TrackList tracklist={trackList} />
  
};

export default App;
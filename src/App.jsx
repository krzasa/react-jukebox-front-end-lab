import { useState, useEffect } from 'react';
import * as jukeboxService from './services/jukeboxService';
import TrackList from './components/TrackList';

const App = () => {
  const [trackList, setTrackList] = useState([])


  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const tracks = await jukeboxService.show();
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
  return (
    <TrackList tracklist={trackList} />
  )
};


export default App;
const TrackList = ({trackList = []}) => {
    const tracks = trackList.map((track) => <li key={track._id}>{track.title}</li>);

    return (
        <div>
        <h1>Track List</h1>
        {!trackList.length ? <h2>No queued tracks!</h2> : <ul>{tracks}</ul>}
        </div>
  );
};
  
  export default TrackList;
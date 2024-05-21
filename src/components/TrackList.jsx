const trackList = (props) => {
    const tracks = props.trackList.map((track) => <li key={track._id}>{track.name}</li>);

    return (
        <div>
        <h1>Track List</h1>
        {!props.trackList.length ? <h2>No queued tracks!</h2> : <ul>{tracks}</ul>}
        </div>
  );
};
  
  export default trackList;
import video from "../data/video.js";
import DisplayVideo from "./DisplayVideo";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <DisplayVideo video={video}/>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import ResidentInfo from "./components/ResidentInfo";

function App() {
  const [rickAndMorty, setRickAndMorty] = useState({});
  const [location, setLocation] = useState("");
  

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setRickAndMorty(res.data));
   
  }, []);

  const searchByLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${location}`)
      .then((res) => {
        setRickAndMorty(res.data);
        
      });
  };

  return (
    <div className="App">
      <h1>
        <img
          className="title"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
          alt=""
        />
      </h1>
      <input
        type="text"
        placeholder="type a number here"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={searchByLocation}>Search</button>
      <div className="card-info-container">
        <div className="location">
          <h2 className="location-title">{rickAndMorty.name}</h2>
        </div>

        <div className="other-info">
          <div className="info-type">
            <h3 className="sub-info">Type:</h3> {rickAndMorty.type}
          </div>

          <div className="info-dimension">
            <h3 className="sub-info">Dimension:</h3> {rickAndMorty.name}
          </div>

          <div className="info-population">
            <h3 className="sub-info">Population:</h3>
            {rickAndMorty.residents?.length}
          </div>
        </div>
      </div>
     
      <div className="container-character">
        {rickAndMorty.residents?.map((resident) => (
          <ResidentInfo key={resident} url={resident} />
        ))}
      </div>
    </div>
  );
}

export default App;

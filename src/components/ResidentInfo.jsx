import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ url }) => {
  const [imgRickAndMorty, setRickAndMorty] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setRickAndMorty(res.data));
  }, []);
  
  return (
    <>
    
      <div className="character">
        <img className="img" src={imgRickAndMorty.image} />
        <div className="complete-info">
          <h3>{imgRickAndMorty.name}</h3>

          <h5>Dimension: <span>{imgRickAndMorty.location?.name}</span></h5>

          <h5>Origin: <span>{imgRickAndMorty.origin?.name}</span></h5>

          <h5>Status: <span>{imgRickAndMorty.status}</span></h5>

          <h5>Episode: <span>{imgRickAndMorty.episode?.length}</span></h5>
        </div>
      </div>
    </>
  );
};

export default ResidentInfo;

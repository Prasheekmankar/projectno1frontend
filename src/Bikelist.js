import { API_URL } from "./global-constnt";
// import { useState} from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";

export function Bikelist() {
  const history = useHistory();

  const [Bike, setBike] = useState([]);
  const getBike = () => {
    fetch(`${API_URL}/bikelist`)
      .then((data) => data.json())
      .then((bike) => setBike(bike));
  };
  useEffect(getBike, [history]);

  return (
    <div className="Container" >
      {Bike.map((bike) => (
        
        <div key={bike._id} className="bikecontainer">
          <Card className="card"  style={
            { backgroundColor: "rgb(72, 209, 204)" }
            }>
            <img className="bike-poster" src={bike.poster} alt={bike.name} />
            <div className="details">
            <h2>{bike.name}</h2>
            <h4> {bike.mileage}km/lt ,Cost: {bike.daycost}/day, </h4>
            </div>
          </Card>
           </div>
      ))}
    </div>
  );
}


import './App.css';
import { useState, useEffect } from "react";
import FurnitureItem from "./FurnitureItem";
import * as FurnitureService from "./services/furniture";

const App = () => {
  const [furnitures, setFurnitures] = useState([]);

  const fetchFurnitures = () => {
    FurnitureService.getAllFurnitures()
      .then((response) => response.json())
      .then((data) => setFurnitures(data));
  };

  useEffect(() => {
    fetchFurnitures();
  }, []);

  const furnitureItems = furnitures.map((furniture, idx) => (
    <FurnitureItem furniture={furniture} key={furniture.id} fetchFurnitures={fetchFurnitures} />
  ));

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">{furnitureItems}</div>
    </div>
  );
};

export default App;

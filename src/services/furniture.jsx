export const getAllFurnitures = () =>
    fetch(
      "https://api.react-formula.com/learning-api/demos/updating-furni/furnitures"
    );
  
  export const deleteFurniture = (furnitureId) =>
    fetch(
      `https://api.react-formula.com/learning-api/demos/updating-furni/furnitures/${furnitureId}`,
      {
        method: "DELETE",
      }
    );
  
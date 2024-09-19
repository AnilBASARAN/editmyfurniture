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

export const updateFurniture = (furnitureId,bodyfurniture) => 

  fetch(`https://api.react-formula.com/learning-api/demos/updating-furni/furnitures/${furnitureId}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(bodyfurniture),
});

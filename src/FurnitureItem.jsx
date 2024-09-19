import {useState} from "react";
import * as FurnitureService from "./services/furniture";

const FurnitureItem = (props) => {
  
  const { furniture, fetchFurnitures } = props;
  const [furnitureName,setFurnitureName] = useState(furniture.name);
  const [furnitureDescription,setFurnitureDescription] = useState(furniture.description);
  const [isEditing,setIsEditing] = useState(false);
  return (
    <div className="flex m-8 border rounded-lg shadow-md border-stone-300 overflow-clip">
      <img
        alt=""
        src={furniture.image}
        className="object-cover w-48 h-48 border-r border-stone-300"
      />
      <div className="flex flex-col justify-between w-full px-6 py-4 bg-white">
        {
          !isEditing ?
        <div className="text-2xl text-stone-600">{furniture.name}</div>:
          <input
            onChange={(e)=>{
              setFurnitureName(e.target.value)
            }}
            value={furnitureName}
            type="text" 
            className="shadow-md" />
        }

        {
        !isEditing ?
        <div className="text-stone-500">{furniture.description}</div>:
           <textarea
              onChange={(e)=>{
              setFurnitureDescription(e.target.value)
            }}
            value={furnitureDescription}
            type="text" 
            className="shadow-md" />
        }
        
        
        <div className="flex justify-end">


          {
            isEditing ?
            
            (<button className="px-4 py-2 mx-1 bg-green-500 rounded-lg text-red-50 hover:bg-red-600"
            onClick={()=>{
              setIsEditing(true);
            }}
            >
            <i className="mr-1 fa-solid fa-check"></i>
            edit
          </button>) 
            
            :
            
            (<> <button className="px-4 py-2 mx-1 bg-blue-500 rounded-lg text-red-50 hover:bg-red-600"
            onClick={()=>{
              setIsEditing(true);
            }}
            >
            <i className="mr-1 fa-solid fa-pen"></i>
            edit
          </button>
          
          <button className="px-4 py-2 mx-1 bg-red-500 rounded-lg text-red-50 hover:bg-red-600"
            onClick={async () => {
              await FurnitureService.deleteFurniture(furniture.id);
              fetchFurnitures();
            }}
            >
            <i className="mr-1 fa-solid fa-trash"></i>
            delete
          </button></>)

            
          }
          
        </div>
      </div>
    </div>
  );
};

export default FurnitureItem;

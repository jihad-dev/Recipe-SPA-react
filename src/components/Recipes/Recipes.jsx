import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [menues, setMenues] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  console.log(selectedRecipe);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenues(data));
  }, []);
  const handleSelectRecipe = (menu) => {
    const newMenu = [...selectedRecipe, menu];
    setSelectedRecipe(newMenu);
    
  };
  return (
    <div className="pt-7 pb-8">
      <center>
        <h2 className="font-semibold text-3xl mb-3 ">Our Recipes</h2>
        <h2>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus <br /> pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </h2>
      </center>
      <div className="grid lg:grid-cols-2">
        <div className="w-full grid lg:grid-cols-2 gap-3 grid-cols-1">
          {menues.map((menu) => (
            <Recipe
              handleSelectRecipe={handleSelectRecipe}
              key={menu}
              menu={menu}
            ></Recipe>
          ))}
        </div>
        <div className="w-full ">
          <div className="w-full p-4 text-center h-[680px] border border-red-800">
            Want to cook: {selectedRecipe.length}
            <div className="flex justify-center gap-10 pt-6">
              <h3>Name</h3>
              <h3>Time</h3>
              <h3>Categories</h3>
            </div>
            <div>
              
              {selectedRecipe.map((select,idx) => (
                <div className="border border-purple-600 flex p-3" key={idx}>
                  <h2>{select.name}</h2>
                
                  <h2>{select.name}</h2>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;

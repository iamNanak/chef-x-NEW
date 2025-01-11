import React, { useState } from "react";
import Ingredients from "./Ingredients";

const Input = () => {
  const [ingredients, setIngredients] = useState([]);


  const addIngredient = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim()) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient.trim()]);
    }
    event.target.reset();
  };
 


  return (
    <form
      onSubmit={addIngredient}
      className="flex flex-col items-center mx-auto my-5 p-4 md:max-w-[900px]"
    >
      <div className="flex flex-row items-center w-full max-w-[500px] md:max-w-[800px] gap-3 p-3 rounded-md">
        <input
          type="text"
          placeholder="Add your ingredients here..."
          name="ingredient"
          className="flex-grow border border-gray-300 shadow-sm rounded-md px-3 py-2 text-slate-700"
        />
        <button
          type="submit"
          className="bg-black hover:bg-slate-900 text-white font-semibold px-4 py-2 rounded-md transition duration-300"
        >
          + Add ingredients
        </button>
      </div>
      {
        ingredients.length >= 1 ? <Ingredients ingredients={ingredients}/> : null
      }
    </form>
  );
};

export default Input;

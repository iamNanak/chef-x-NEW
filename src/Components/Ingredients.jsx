import React, { useState, useEffect } from "react";
import Output from "./Output";
import getRecipe from "../HuggingFace/app";

const Ingredients = ({ ingredients }) => {
  const [recipeShow, setRecipeShow] = useState(null);
  const ingredientsListItems = ingredients.map((ingredient, index) => (
    <li key={index} className="text-xl font-bold text-gray-300">
      {ingredient}
    </li>
  ));

  const [isLoading, setIsLoading] = useState(false);

  async function getRecipeFromAI() {
    setIsLoading(true);
    try {
      const recipeMarkdown = await getRecipe(ingredients);
      setRecipeShow(recipeMarkdown);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  console.log(recipeShow);

  return (
    <section className="w-full max-w-[500px] md:max-w-[800px] mt-5 p-3 rounded-md text-gray-300">
      <h3 className="text-2xl font-semibold mb-2 ">Your Ingredients:</h3>
      <ul className="list-disc list-inside">{ingredientsListItems}</ul>
      {ingredients.length >= 3 ? (
        <div className="flex flex-row items-center w-full max-w-[500px] md:max-w-[800px] gap-3 p-3 rounded-md border border-gray-400 shadow-2xl mt-4 justify-between">
          <div className="flex flex-col gap-y-2 ">
            <h4>Ready for recipe?</h4>
            <p>Generate your recipe as from ingredients.</p>
          </div>
          <button
            onClick={getRecipeFromAI}
            className="ml-3 bg-black px-2 py-2 rounded-md"
          >
            Get a recipe
          </button>
        </div>
      ) : null}
      {isLoading && ingredients.length >= 3 ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : (
        recipeShow && <Output recipeMarkdown={recipeShow} />
      )}
    </section>
  );
};

export default Ingredients;

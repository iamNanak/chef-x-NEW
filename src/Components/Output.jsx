import React, { useState, useEffect } from "react";
// import Markdown from 'markdown-to-jsx';
import Markdown from "react-markdown";
// import getRecipe from "../HuggingFace/app";

const Output = ({ recipeMarkdown }) => {
  // const sections = recipeMarkdown
  //   .split(/\n(?=### )/)
  //   .map((section) => section.trim());
  const parsedecipeMarkdown = <Markdown>{recipeMarkdown}</Markdown>;
  const [recipes, setRecipes] = useState([]);

  const handleNewResponse = (recipeMarkdown) => {
    const recipeSections = recipeMarkdown.split(/\n\n(?=\d+\.)/);
    const parsedRecipes = recipeSections.map((section) => {
      const [titleLine, ...contentLines] = section.split("\n");
      const ingredientsIndex = contentLines.findIndex((line) =>
        line.toLowerCase().includes("ingredients:")
      );
      const instructionsIndex = contentLines.findIndex((line) =>
        line.toLowerCase().includes("instructions:")
      );

      const name = titleLine.replace(/^\d+\.\s*/, "").trim();
      const ingredients = contentLines
        .slice(ingredientsIndex + 1, instructionsIndex)
        .map((line) => line.trim());
      const instructions = contentLines
        .slice(instructionsIndex + 1)
        .map((line) => line.trim());

      return { name, ingredients, instructions };
    });

    setRecipes(parsedRecipes);
  };

  useEffect(() => {
    handleNewResponse(recipeMarkdown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipes</h1>
      <div className="space-y-8">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-2xl font-semibold">{recipe.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Ingredients */}
              <div>
                <h3 className="text-xl font-bold mb-2">Ingredients</h3>
                <ul className="list-disc list-inside space-y-1">
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              {/* Instructions */}
              <div>
                <h3 className="text-xl font-bold mb-2">Instructions</h3>
                <ol className="list-decimal list-inside space-y-1">
                  {recipe.instructions.map((instruction, i) => (
                    <li key={i}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Output;

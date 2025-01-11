import { HfInference } from "@huggingface/inference";

const apiKey = import.meta.env.VITE_HF_API;
const System_Prompt = "You are my personal chief assistant ai and i will give you ingredients list items you just take that ingredients or add if you want to add few more ingredients in them and suggest me proper dishes in dinner or may be lunch with proper guidance and instructions step by step in a markdown file format so i render this on my website after doing formatting."


const huggingFace = new HfInference(apiKey);

async function getRecipe(ingredients) {
    const ingredientsString = ingredients.join(" ,");
    console.log(ingredientsString)
    try {
        const recipe = await huggingFace.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                {
                    role: "system",
                    content: System_Prompt
                },
                {
                    role: "user",
                    content: `I have these ${ingredientsString} in hand please suggest me recipes from these `
                }

            ],
            max_tokens: 1024
        })
        console.log(recipe)
        return recipe.choices[0].message.content
    } catch (error) {
        console.error(error.message)
    }

}

export default getRecipe;
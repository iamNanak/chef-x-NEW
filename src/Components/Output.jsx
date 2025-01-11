import React from 'react'
// import Markdown from 'markdown-to-jsx';
import Markdown from 'react-markdown';

const Output = ({ recipeMarkdown }) => {
    console.log(recipeMarkdown)

    return (

        <article className='className="flex flex-col items-center mx-auto my-8 p-4 md:max-w-[900px]'>
            <h1 className='text-3xl font-extrabold text-gray-300'> Suggested recipe as per your ingredients in hand :</h1>
            <Markdown>{recipeMarkdown}</Markdown>
        </article>

    )
}

export default Output;
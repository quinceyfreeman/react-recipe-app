const Recipe = ({ recipe }) => {
    return (
        <div>
            <div className='task'>
            <h3>{recipe.name}</h3>
            <p>{recipe.decription}</p>

            <p>Ingredients</p>
            <ul style={{margin:'1rem',}}>
                {recipe.ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}
            </ul>

            <p>Steps</p>
            <ol style={{margin:'1rem',}}>
                {recipe.steps.map((step, index) => (<li key={index}>{step}</li>))}
            </ol>
        </div>
        </div>
    )
}

export default Recipe

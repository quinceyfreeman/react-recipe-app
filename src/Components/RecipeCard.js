const RecipeCard = ({ recipe, onClick}) => {
    return (
        <div>
            <div className='recipe-card' onClick={onClick}>
                <img className='recipe-card__img' src={recipe.imageUrl} alt={'image for ' + recipe.name + ' recipe'} />
                <div className='recipe-card__info'>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                </div>

            {/* Use to get ingredients and steps */}
            {/* <p>Ingredients</p>
            <ul style={{margin:'1rem',}}>
                {recipe.ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}
            </ul>

            <p>Steps</p>
            <ol style={{margin:'1rem',}}>
                {recipe.steps.map((step, index) => (<li key={index}>{step}</li>))}
            </ol> */}
        </div>
        </div>
    )
}

export default RecipeCard

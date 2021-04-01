import RecipeCard from './RecipeCard'

const RecipeList = ({ category, recipeList, onClick }) => {
    return (
        <div>
            <h2>{category}</h2>
            <div className='recipe-categories'>
                {recipeList.map((recipe) => <RecipeCard key={ recipe.id } recipe={ recipe } onClick={onClick} /> )}
            </div>
        </div>
    )
}

export default RecipeList

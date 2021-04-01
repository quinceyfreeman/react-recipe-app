import Recipe from './Recipe'

const RecipeList = ({ recipeList }) => {
    return (
        <div>
            {recipeList.map((recipe) => <Recipe key={ recipe.id } recipe={ recipe } /> )}
        </div>
    )
}

export default RecipeList

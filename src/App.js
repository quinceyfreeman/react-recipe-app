import './App.css';
import Header from './Components/Header'
import RecipeList from './Components/RecipeList'

const defaultRecipes = [
	{
		id: 0,
		name: 'Pizza',
		decription: 'An italian cuisine',
		favorite: false,
		ingredients: 
		['dough',
		'sauce',
		'cheese',
		'toppings'],
		steps: 
		['Flatten out dough', 
		'Add sauce', 
		'Add cheese', 
		'Add toppings',
		'Cook in oven for 20 mins', 
		'Let cool and enjoy'],
		prepTime: '10 min',
		cookTime: '20 min',
		serves: 5,
		imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
	},
	{
		id: 1,
		name: 'Chicken',
		decription: 'Delectible fried chicken',
		favorite: true,
		ingredients: 
		['chicken tenders',
		'flour',
		'vegetable oil',
		'eggs',
		'seasoning salt',
		'salt'],
		steps: 
		['Mix dry ingredients', 
		'Dip chicken in eggs, then dry mix', 
		'Put in pan of oil', 
		'Cook until golding, then add to cookie sheet',
		'Cook in oven for 30 mins', 
		'Let cool and enjoy'],
		prepTime: '15 min',
		cookTime: '45 min',
		serves: 6,
		imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
	},
]

const onClick = () => {
	console.log('click')
}

function App() {
	return (
		<div>
			<Header onClick={onClick} />
			<div className='container'>
				<RecipeList category='Favorites' recipeList={defaultRecipes.filter((recipe) => (recipe.favorite))} onClick={onClick} />
				<RecipeList category='All Recipes' recipeList={defaultRecipes} onClick={onClick} />
			</div>
		</div>
	);
}

export default App;

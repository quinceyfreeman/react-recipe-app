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
		'Let cool and enjoy']
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
		'Let cool and enjoy']
	},
]

const onClick = () => {
	console.log('click')
}

function App() {
	return (
		<div className='container'>
			<Header onClick={onClick} />
			<RecipeList recipeList={defaultRecipes} />
		</div>
	);
}

export default App;

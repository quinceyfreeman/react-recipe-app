import './App.css';
import Header from './Components/Header'
import RecipeList from './Components/RecipeList'

// const defaultRecipes = [
// 	{
// 		id: 0,
// 		name: 'Pizza',
// 		decription: 'An italian cuisine',
// 		favorite: false,
// 		ingredients: 
// 		['dough',
// 		'sauce',
// 		'cheese',
// 		'toppings'],
// 		steps: 
// 		['Flatten out dough', 
// 		'Add sauce', 
// 		'Add cheese', 
// 		'Add toppings',
// 		'Cook in oven for 20 mins', 
// 		'Let cool and enjoy'],
// 		prepTime: '10 min',
// 		cookTime: '20 min',
// 		serves: 5,
// 		imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
// 	},
// 	{
// 		id: 1,
// 		name: 'Chicken',
// 		decription: 'Delectible fried chicken',
// 		favorite: true,
// 		ingredients: 
// 		['chicken tenders',
// 		'flour',
// 		'vegetable oil',
// 		'eggs',
// 		'seasoning salt',
// 		'salt'],
// 		steps: 
// 		['Mix dry ingredients', 
// 		'Dip chicken in eggs, then dry mix', 
// 		'Put in pan of oil', 
// 		'Cook until golding, then add to cookie sheet',
// 		'Cook in oven for 30 mins', 
// 		'Let cool and enjoy'],
// 		prepTime: '15 min',
// 		cookTime: '45 min',
// 		serves: 6,
// 		imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
// 	},
// 	{
//         id: 2,
//         name: "Baked Shrimp Scampi",
// 		decription: "Tasty seafood",
// 		favorite: false,
// 		ingredients: 
// 		[   "2/3 cup panko",
//             "1/4 teaspoon red pepper flakes",
//             "1/2 lemon, zested and juiced",
//             "1 extra-large egg yolk",
//             "1 teaspoon rosemary, minced",
//             "3 tablespoon parsley, minced",
//             "4 clove garlic, minced",
//             "1/4 cup shallots, minced",
//             "8 tablespoon unsalted butter, at room temperature",
//             "2 tablespoon dry white wine",
//             "Freshly ground black pepper",
//             "Kosher salt",
//             "3 tablespoon olive oil",
//             "2 pound frozen shrimp"
//         ],
//         steps: 
// 		[ 	"Preheat the oven to 425 degrees F.",
// 			"Defrost shrimp by putting in cold water, drain.",
// 			"Place the shrimp in serving dish (9x13 or 2 quart casserole) and toss gently with the olive oil, wine, 1 teaspoons salt, and 1 teaspoon pepper.",
// 			"Allow to sit at room temperature while you make the butter and garlic mixture.",
// 			"In a small bowl, mash the softened butter with the garlic, shallots, parsley, rosemary, red pepper flakes, lemon zest, lemon juice, egg yolk, panko, 1/2 teaspoon salt, and 1/4 teaspoon of pepper until combined.",
// 			"Spread the butter mixture evenly over the shrimp.",
// 			"Bake for 10 to 12 minutes until hot and bubbly.",
// 			"If you like the top browned, place under a broiler for 1-3 minutes (keep an eye on it).",
// 			"Serve with lemon wedges and French bread.",
// 			"Note: if using fresh shrimp, arrange for presentation. Starting from the outer edge of a 14-inch oval gratin dish, arrange the shrimp in a single layer cut side down with the tails curling up and towards the center of the dish. Pour the remaining marinade over the shrimp. "],
// 		prepTime: '20 min',
// 		cookTime: '45 min',
// 		serves: 3,
// 		imageUrl: 'https://images.unsplash.com/photo-1579887829114-282b4fa31072?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
//     },
// ]

const simpleRecipeJson = [
	{
		id: 0,
		name: 'Pizza',
		description: 'An italian cuisine',
		favorite: false,
		imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
	},
	{
		id: 1,
		name: 'Chicken',
		description: 'Delectible fried chicken',
		favorite: true,
		imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
	},
	{
		id: 2,
		name: 'Baked Shrimp Scampi',
		description: 'Tasty seafood',
		favorite: false,
		imageUrl: 'https://images.unsplash.com/photo-1579887829114-282b4fa31072?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
	},
	{
		id: 3,
		name: 'Tomato Basil Soup',
		description: 'A soupy soup',
		favorite: false,
		imageUrl: 'https://images.unsplash.com/photo-1543283814-64738c3a3d6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2690&q=80',
	},
	{
		id: 4,
		name: 'Pecan Pie',
		description: 'A pie made by John',
		favorite: true,
		imageUrl: 'https://images.unsplash.com/photo-1574684117906-450bb1498b8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80',
	},
	{
		id: 5,
		name: 'Smoked Salmon',
		description: 'A quick salmon plate',
		favorite: false,
		imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
	},
	{
		id: 6,
		name: 'Salad',
		description: 'Salad with variety',
		favorite: false,
		imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
	},
	{
		id: 7,
		name: 'Pesto Pasta',
		description: 'An italian pasta',
		favorite: false,
		imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
	},
	{
		id: 8,
		name: 'Fish Plate',
		description: 'A meal for lunch',
		favorite: false,
		imageUrl: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
	},
	{
		id: 9,
		name: 'Homemade Hamburger',
		description: 'Classic hamburger',
		favorite: true,
		imageUrl: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
	},
	{
		id: 10,
		name: 'Pork Chop',
		description: 'Quick, Easy dinner',
		favorite: false,
		imageUrl: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80',
	},
]

const onClick = () => {
	console.log('rhys')
}

function App() {
	return (
		<div>
			<Header onClick={onClick} />
			<div className='container'>
				<RecipeList category='Favorites' recipeList={simpleRecipeJson.filter((recipe) => (recipe.favorite))} onClick={onClick} />
				<RecipeList category='All Recipes' recipeList={simpleRecipeJson} onClick={onClick} />
			</div>
		</div>
	);
}

export default App;

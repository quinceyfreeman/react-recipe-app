import './App.css';
import Header from './Components/Header'

const onClick = () => {
	console.log('click')
}

function App() {
	return (
		<Header onClick={onClick} />
	);
}

export default App;

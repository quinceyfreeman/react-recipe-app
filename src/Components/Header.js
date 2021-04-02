import Button from './Button'
import NavBar from './NavBar'
import PropTypes from 'prop-types'

const Header = ({ title, onClick }) => {

    return (
        <div className='header-container'>
        <header className='header'>
            <h1>{title}</h1>
            <NavBar />
            <Button onClick={ onClick } />
        </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Recipes',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

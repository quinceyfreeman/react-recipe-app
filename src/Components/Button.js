import PropTypes from 'prop-types'

const Button = ({ color, onClick }) => {
    return (
        <button className='btn' style={{backgroundColor: {color}}} onClick={onClick}>Add</button>
    )
}

Button.defaultProps = {
    color: '#000',
}
Button.propTypes = {
    color: PropTypes.string,
}

export default Button

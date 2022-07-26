import './button.style.scss';


const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted'
}
const Button = ({ children, buttonType, ...otherProps}) => {
    return(
        // adding button a new class called buttonTypeClass based on buttonTypes passed
        <button className={ `button-container my-3 ${BUTTON_TYPE_CLASS[buttonType]}` } 
        {...otherProps}
        >
            {children}
        </button>

    );
}

export default Button;
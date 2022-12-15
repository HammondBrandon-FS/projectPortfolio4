// Button component pre-styled to accept different labels

const Button = props => {
    return(
        <button className='button'>{props.label}</button>
    );
}

export default Button;
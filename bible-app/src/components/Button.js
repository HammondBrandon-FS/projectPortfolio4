// Button component

const Button = props => {
    return(
        <button style={styles.button}>{props.label}</button>
    );
}

export default Button;

const styles = {
    button: {
        background: '#4F9AD8',
        color: '#fff',
        padding: '8px 20px',
        border: 'none',
        fontSize: '1.1em'
    }
}
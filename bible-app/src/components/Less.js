// Lesson Plan Component 2

// Image
import Pray from '../images/pray.jpg';

const Less = props => {
    return (
        <div style={styles.container}>
            <img style={styles.image} src={Pray} alt='praying hands on Bible'></img>
            <h3 style={styles.heading}>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    );
}

export default Less;

const styles = {
    container: {
        width: '25%',
        border: '1px solid red',
        marginBottom: '2%'
    },
    image: {
        width: '100%',
        height: 'auto'
    },
    heading: {
        textAlign: 'center',
        margin: '0'
    }
}
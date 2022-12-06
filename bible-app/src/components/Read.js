// Reading Plan component 2

// Image
import Bible from '../images/bible.jpg';

const Read = props => {
    return (
        <div style={styles.container}>
            <img style={styles.image} src={Bible} alt='cross on Bible'></img>
            <h3 style={styles.heading}>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    );
}

export default Read;

const styles = {
    container: {
        width: '26%',
        border: '1px solid red',
        overflow: 'hidden',
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
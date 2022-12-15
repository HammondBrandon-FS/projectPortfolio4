// Lesson Component

// Components
import Button from '../components/Button';

const Lesson = props => {
    return (
        <div style={styles.container}>
            <img src={props.image} alt={props.alt}></img>
            <h3 style={styles.title}>{props.title}</h3>
            <Button label='Study' />
        </div>
    );
}

export default Lesson;

const styles = {
    container: {
        inlineSize: 'min-content'
    },
    image: {
        width: '100%',
        height: 'auto'
    },
    title: {
        margin: '0',
        color: '#151C22'
    }
}
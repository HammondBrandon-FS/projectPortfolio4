// Reading Plan Component for Home Page

// Components
import Button from '../components/Button';

const Plan = props => {
    return (
        <div style={styles.container}>
            <img src={props.image} alt={props.alt}></img>
            <h3 style={styles.title}>{props.title}</h3>
            <p>{props.description}</p>
            <Button label='Read More' />
        </div>
    );
}

export default Plan;

const styles = {
    container: {
        inlineSize: 'min-content'
    },
    image: {
        width: '100%',
        height: 'auto'
    },
    title: {
        margin: '0'
    }
}
// Reading Plan component 2

// Image
import Bible from '../images/bible.jpg';

// Components
import Button from '../components/Button';

const Read = props => {
    return (
        <div style={styles.container}>
            <img src={Bible} alt='cross on Bible'></img>
            <div style={styles.text}>
                <h3 style={styles.heading}>{props.title}</h3>
                <p>{props.desc}</p>
                <Button style={styles.button} label='Read' />
            </div>
        </div>
    );
}

export default Read;

const styles = {
    container: {
        inlineSize: 'min-content',
        textAlign: 'center'
    },
    text: {
        border: '1px solid #151C22',
        padding: '2% 0'
    },
    heading: {
        textAlign: 'center',
        margin: '0'
    }
}
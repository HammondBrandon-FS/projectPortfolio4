// Lesson Plan Component 2

// Image
import Pray from '../images/pray.jpg';

// Components
import Button from '../components/Button'

const Less = props => {
    return (
        <div style={styles.container}>
            <img src={Pray} alt='praying hands on Bible'></img>
            <div style={styles.text}>
                <h3 style={styles.heading}>{props.title}</h3>
                <p>{props.desc}</p>
                <Button label='Study' />
            </div>
            
        </div>
    );
}

export default Less;

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
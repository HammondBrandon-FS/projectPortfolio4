// Lesson Component

const Lesson = props => {
    return (
        <div style={styles.container}>
            <img src={props.image} alt={props.alt}></img>
            <h3>{props.title}</h3>
        </div>
    );
}

export default Lesson;

const styles = {
    container: {
        border: '1px solid black'
    }
}
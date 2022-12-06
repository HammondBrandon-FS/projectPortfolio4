// Reading Plan Component for Home Page

const Plan = props => {
    return (
        <div style={styles.container}>
            <img src={props.image} alt={props.alt}></img>
            <h3>{props.title}</h3>
            <button>Read More</button>
        </div>
    );
}

export default Plan;

const styles = {
    container: {
        border: '1px solid black'
    }
}
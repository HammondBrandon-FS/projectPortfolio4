// Bibles Page Component

//Components
import Content from '../components/Content';

const Bible = props => {
    return (
        <div style={styles.container}>
            <h2>Bible Library</h2>
            {props.data.map(bible => {
                return <Content key={bible.id} name={bible.name} language={bible.language.name} />
            })}
        </div>
    );
}

export default Bible;

const styles = {
    container: {

    }
}
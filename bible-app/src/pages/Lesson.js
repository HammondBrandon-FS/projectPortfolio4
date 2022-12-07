// Lesson Plan Page Component

// Components
import Less from '../components/Less';

const Lesson = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Lesson Plans</h2>
            <div style={styles.lessons}>
                <Less title='The book of Mark' desc='Verse by verse analysis and commentary.'/>
                <Less title='The book of Job' desc='Verse by verse analysis and commentary.'/>
                <Less title='The book of Matthew' desc='Verse by verse analysis and commentary.'/>
                <Less title='The book of Revelation' desc='Verse by verse analysis and commentary.'/>
                <Less title='The book of John' desc='Verse by verse analysis and commentary.'/>
                <Less title='Old Testament Prophecy' desc='A walk through Old Testament prophecies and fulfillment.'/>
                <Less title='The Character of God' desc='A look at the nature and characteristics of God in the Bible.'/>
            </div>
        </div>
    );
}

export default Lesson;

const styles = {
    container: {
        padding: '0 8%'
    },
    heading: {
        textAlign: 'center'
    },
    lessons: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}
// Lesson Plan Page Component

// Components
import Less from '../components/Less';
import Footer from '../components/Footer';

const Lesson = () => {
    return (
        <div>
            <div style={styles.container}>
                <h2 style={styles.heading}>Lesson Plans</h2>
                {/* List of Lessons */}
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
            <Footer />
        </div>
        
    );
}

export default Lesson;

const styles = {
    container: {
        padding: '0 8%'
    },
    heading: {
        textAlign: 'center',
        margin: '0',
        padding: '2% 0'
    },
    lessons: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: '50px',
        paddingBottom: '1%'
    }
}
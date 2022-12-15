// Dashboard Page Component

// Components
import Lesson from '../components/Lesson';
import Plan from '../components/Plan';
import Footer from '../components/Footer';

// Images
import Pulpit from '../images/pulpit.jpg';
import LessonImg from '../images/lesson.jpg';
import Church from '../images/church.jpg';
import Group from '../images/group.jpg';
import Praying from '../images/praying.jpg';
import Open from '../images/open.jpg';

const Dashboard = () => {
    return (
        // Page Container
        <div style={styles.container}>
            {/* Hero Image */}
            <div style={styles.hero}>
                {/* Hero Text */}
                <h2 style={styles.heading}>User's Dashboard</h2>
            </div>
            {/* Current Lessons Section */}
            <section style={styles.lessons}>
                <h2 style={styles.sections}>Current Lessons</h2>
                <p style={styles.para}>This section contains all of the current lessons you are subscribed to. Click the picture to open the lesson.</p>
                {/* List of Lessons */}
                <div style={styles.lessonList}>
                    <Lesson image={LessonImg} alt='Open bible on table' title='The book of Mark'/>
                    <Lesson image={LessonImg} alt='Open bible on table' title='The book of Job'/>
                    <Lesson image={LessonImg} alt='Open bible on table' title='The book of Matthew'/>
                    <Lesson image={LessonImg} alt='Open bible on table' title='The book of Revelation'/>
                    <Lesson image={LessonImg} alt='Open bible on table' title='The book of John'/>
                    <Lesson image={LessonImg} alt='Open bible on table' title='Old Testament Prophecy'/>
                </div>
            </section>
            {/* Daily Verse Section */}
            <section style={styles.verse}>
                <h2 style={styles.verseHead}>Daily Verse</h2>
                <p style={styles.versePara}>4 “You shall not make for yourself an image in the form of anything in heaven above or on the earth beneath or in the waters below. 5 You shall not bow down to them or worship them; for I, the Lord your God, am a jealous God, punishing the children for the sin of the parents to the third and fourth generation of those who hate me, 6 but showing love to a thousand generations of those who love me and keep my commandments.</p>
                <p style={styles.verseBook}>-Exodus 20:4-6</p>
            </section>
            {/* Reading Plans Section */}
            <section style={styles.plans}>
                <h2 style={styles.sections}>Reading Plans</h2>
                {/* Reading Plans List */}
                <div style={styles.readingList}>
                    <Plan image={Church} title='Church Reading' description='Keep up with the rest of the congregation and prepare for the next Sunday sermon.' alt='Church on a hill'/>
                    <Plan image={Group} title='Small Group Reading' description='Track your reading progress in your small group and assign chapters and verses each week.' alt='Group of people reading'/>
                    <Plan image={Praying} title='Individual Reading' description='Like to read on your own? Create your own reading plan here to hold yourself accountable.' alt='Hands praying on Bible'/>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Dashboard;

// Styles
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        background: '#DFDFD5',
    },
    hero: {
        background: `url(${Pulpit})`,
        backgroundSize: 'cover',
        textAlign: 'center',
        padding: '18% 0',
        boxShadow: '0px 10px 10px #806A57 inset'
    },
    heading: {
        color: '#FEF6C2',
        fontSize: '3em',
        padding: '0',
        margin: '0',
        textShadow: '2px 2px 1px black'
    },
    sections: {
        color: '#806A57',
        fontSize: '2em',
        textDecoration: 'underline',
        textUnderlineOffset: '10px'
    },
    para: {
        color: '#151C22',
        fontSize: '1.3em',
        paddingBottom: '1%'
    },
    lessons: {
        textAlign: 'center',
        paddingBottom: '4%'
    },
    lessonList: {
        padding: '0 8%',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        rowGap: '40px'
    },
    verse: {
        padding: '4% 8%',
        background: `url(${Open})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center'
    },
    verseHead: {
        background: 'rgba(0,0,0, .7)',
        color: '#fff',
        fontSize: '2em',
        marginBottom: '0',
        padding: '1% 0'
    },
    versePara: {
        background: 'rgba(0,0,0, .7)',
        margin: '0',
        fontSize: '1.1em',
        color: '#fff'
    },
    verseBook: {
        background: 'rgba(0,0,0, .7)',
        margin: '0 0 2%',
        padding: '0 0 1%',
        fontSize: '1.1em',
        color: '#fff'
    },
    plans: {
        textAlign: 'center',
        paddingBottom: '4%'
    },
    readingList: {
        padding: '0 8%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        rowGap: '40px'
    }
}
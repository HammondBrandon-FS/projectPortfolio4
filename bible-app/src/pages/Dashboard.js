// Dashboard Page Component

// React Imports
import React from 'react';

// Components
import Lesson from '../components/Lesson';

// Images
import Pulpit from '../images/pulpit.jpg';
import LessonImg from '../images/lesson.jpg';

const Dashboard = () => {
    return (
        <div style={styles.container}>
            <div style={styles.hero}>
                <h2>User's Dashboard</h2>
            </div>
            <section style={styles.lessons}>
                <h2>Current Lessons</h2>
                <p>This section contains all of the current lessons you are subscribed to.</p>
                <div style={styles.lessonList}>
                    <Lesson image={LessonImg} alt='Open bible on table' title='The book of Mark'/>
                    <Lesson image={LessonImg} alt='Open bible on table' title='The book of Job'/>
                    <Lesson image={LessonImg} alt='Open bible on table' title='The book of Matthew'/>
                    <Lesson image={LessonImg} alt='Open bible on table' title='The book of Revelation'/>
                    <Lesson image={LessonImg} alt='Open bible on table' title='The book of John'/>
                    <Lesson image={LessonImg} alt='Open bible on table' title='Old Testament Prophecy'/>
                </div>
            </section>
            <section style={styles.verse}>
                <h2>Daily Verse</h2>
                <p>4 “You shall not make for yourself an image in the form of anything in heaven above or on the earth beneath or in the waters below. 5 You shall not bow down to them or worship them; for I, the Lord your God, am a jealous God, punishing the children for the sin of the parents to the third and fourth generation of those who hate me, 6 but showing love to a thousand generations of those who love me and keep my commandments.</p>
                <p>-Exodus 20:4-6</p>
            </section>
            <section style={styles.plans}>
                <h2>Reading Plans</h2>
            </section>
            <footer style={styles.footer}>
                <p>footer stuff</p>
            </footer>
        </div>
    );
}

export default Dashboard;

// Styles
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    hero: {
        background: `url(${Pulpit})`,
        height: '768px',
        textAlign: 'center'
    },
    lessons: {
        background: '#fff',
        textAlign: 'center',
        paddingBottom: '4%'
    },
    lessonList: {
        padding: '0 8%',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        rowGap: '40px'
    },
    verse: {
        padding: '0 8%',
        background: '#aaa',
        textAlign: 'center'
    },
    plans: {
        background: '#fff',
        textAlign: 'center'
    },
    footer: {
        background: '#aaa'
    }
}
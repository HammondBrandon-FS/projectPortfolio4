// Reading Plan Page Component

//Components
import Read from '../components/Read';

const Reading = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Reading Plans</h2>
            <div style={styles.plans}>
                <Read title='Chronological' desc='Read through the Bible in the order in which events and stories occured.'/>
                <Read title='Book Order' desc='Read the Bible from start to finish, from Genesis to Revelation.'/>
                <Read title='Historical' desc='Read the Bible as it was written historically, according to the estimated date of the books writing.'/>
                <Read title='90 Day Plan' desc='Read through the entire Bible in 90 days. Very intense.'/>
                <Read title='Gospels in 40 Days' desc='Read through Matthew, Mark, Luke, and John in this 40 day plan.'/>
                <Read title='Bible in One Year' desc='Read the Bible in one year, broken up into a few chapters per day.'/>
                <Read title='Personal Growth' desc='Daily scripture readings that illustrate the character of God and the nature of faith.'/>
                <Read title='Proverbs Monthly' desc='Read through the book of Proverbs each month.'/>
            </div>
        </div>
    );
}

export default Reading;

const styles = {
    container: {
        padding: '0 8%'
    },
    heading: {
        textAlign: 'center'
    },
    plans: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}
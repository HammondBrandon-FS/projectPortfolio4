// Worship Page Component

// Components
import Button from '../components/Button';
import Footer from '../components/Footer';

// Images
import Cong from '../images/cong.jpg'

const Worship = () => {
    return (
        <div>
            {/* Hero Image */}
            <div style={styles.hero}>
                <h2 style={styles.heading}>Worship</h2>
            </div>
            {/* Setlist Container */}
            <div style={styles.container}>
                <div style={styles.set}>
                    <h3 style={styles.title}>Setlist for Sunday July 23</h3>
                    {/* List of Songs */}
                    <ul style={styles.list}>
                        <li style={styles.item}>
                            <p style={styles.label}>How Great is Our God</p>
                            <div style={styles.buttons}>
                                <Button label='Charts' />
                                <Button label='Lyrics' />
                                <Button label='+' />
                                <Button label='-' />
                            </div>
                        </li>
                        <li style={styles.item}>
                            <p style={styles.label}>Here Comes Heaven</p>
                            <div style={styles.buttons}>
                                <Button label='Charts' />
                                <Button label='Lyrics' />
                                <Button label='+' />
                                <Button label='-' />
                            </div>
                        </li>
                        <li style={styles.item}>
                            <p style={styles.label}>Build Your Church</p>
                            <div style={styles.buttons}>
                                <Button label='Charts' />
                                <Button label='Lyrics' />
                                <Button label='+' />
                                <Button label='-' />
                            </div>
                        </li>
                        <li style={styles.item}>
                            <p style={styles.label}>Cornerstone - He Is</p>
                            <div style={styles.buttons}>
                                <Button label='Charts' />
                                <Button label='Lyrics' />
                                <Button label='+' />
                                <Button label='-' />
                            </div>
                        </li>
                        <li style={styles.item}>
                            <p style={styles.label}>Battle Belongs</p>
                            <div style={styles.buttons}>
                                <Button label='Charts' />
                                <Button label='Lyrics' />
                                <Button label='+' />
                                <Button label='-' />
                            </div>
                        </li>
                    </ul>
                </div> 
            </div>
            <Footer />
        </div>
    );
}

export default Worship;

const styles = {
    hero: {
        background: `url(${Cong})`,
        backgroundSize: 'cover',
        textAlign: 'center',
        padding: '18% 0',
        boxShadow: '0px 10px 10px #806A57 inset'
    },
    heading: {
        color: '#FEF6C2',
        fontSize: '3em',
        padding: '1% 0',
        margin: '0',
        textShadow: '2px 2px 1px black',
        background: 'rgba(0,0,0,.7)'
    },
    container: {
        padding: '0 8%'
    },
    set: {
        margin: '2% auto',
        padding: '0 4%',
        background: '#806A57',
        border: '1px solid #151C22'
    },
    title: {
        textAlign: 'center',
        color: '#FEF6C2',
        fontSize: '1.5em'
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        rowGap: '20px',
        padding: '0'
    },
    item: {
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #FEF6C2'
    },
    label: {
        fontSize: '1.3em',
        margin: '0',
        paddingRight: '3%'
    },
    buttons: {
        display: 'flex',
        columnGap: '10px'
    }
}
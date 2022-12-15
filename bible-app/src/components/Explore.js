// Explore Page

import { useLocation } from 'react-router-dom';

// Images
import Cross from '../images/cross.jpg';

// Components
import Chapter from '../components/Chapter';


const Explore = () => {
    const location = useLocation();
    return (
        <div>
            <div style={styles.hero}>
                <h2 style={styles.heading}>Chapters</h2>
            </div>
            <div>
                {location.state.data.data.map(chapter => {
                    return <Chapter key={chapter.id} id={chapter.id} name={chapter.reference} />
                })}
            </div>
        </div>
    )
}

export default Explore;

const styles = {
    container: {
        padding: '0 8%'
    },
    hero: {
        background: `url(${Cross})`,
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
    title: {
        paddingTop: '2%',
        color: '#151C22'
    }
}
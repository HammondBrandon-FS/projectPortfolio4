// Bibles Page Component

// React Router Imports
import { useLocation } from 'react-router-dom';

// Images
import Cross from '../images/cross.jpg';


const Study = () => {
    const location = useLocation();
    const verses = [];
    const passage = location.state.data.data.content;
    console.log(passage);
    for (let i = 0; i < passage.length; i++) {
        let para = passage[i].items;
        if(para.length > 0) {
            para.forEach(e => {
                if(e.text) {
                    verses.push(e.text + ' ');
                }
                else if (e.items[0].text) {
                    verses.push(e.items[0].text + ' ');
                }
            })
        }
    }
    console.log(verses);
    return (
        <div>
            <div style={styles.hero}>
                <h2 style={styles.heading}>{location.state.name}</h2>
            </div>
            <div style={styles.container}>
                {verses}
            </div>
        </div>
        
    );
}

export default Study;

const styles = {
    container: {
        padding: '1% 8%',
        fontSize: '1.3em'
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
    }
}
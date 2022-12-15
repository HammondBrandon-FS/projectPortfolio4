// Books Page
import {useLocation } from 'react-router-dom';

// Images
import Cross from '../images/cross.jpg';

import Book from '../components/Book';

const Books = () => {
    const location = useLocation();
    return (
        <div>
            {/* Hero Image */}
            <div style={styles.hero}>
                <h2 style={styles.heading}>Books</h2>
            </div>
            <div style={styles.container}>
                {/* Book List */}
                {location.state.data.data.map(book => {
                    return <Book key={book.id} id={book.id} name={book.name} />
                })}
            </div>
        </div>
    )
}

export default Books;

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
    }
}
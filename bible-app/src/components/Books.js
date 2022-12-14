// Books Page
import {useLocation } from 'react-router-dom';
import Book from '../components/Book';

const Books = () => {
    const location = useLocation();
    return (
        <div>
            <h2>Books of the Bible</h2>
            {location.state.data.data.map(book => {
                return <Book key={book.id} id={book.id} name={book.name} />
            })}
        </div>
    )
}

export default Books;
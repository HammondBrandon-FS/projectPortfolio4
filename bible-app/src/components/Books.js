// Books Page

import Book from '../components/Book';

import { useLocation } from 'react-router-dom';

const Books = props => {
    const location = useLocation();
    console.log(location.url);

    return (
        <div>
            <h2>Books of the Bible</h2>
            {props.data.data.map(book => {
                return <Book key={book.id} id={book.id} name={book.name} setBook={props.setBook} />
            })}
        </div>
    )
}

export default Books;
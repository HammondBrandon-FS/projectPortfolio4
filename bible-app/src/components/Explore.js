// Explore Page
import { useLocation } from 'react-router-dom';
import Chapter from '../components/Chapter';


const Explore = () => {
    const location = useLocation();
    return (
        <div>
            <h2>Chapters</h2>
            {location.state.data.data.map(chapter => {
                return <Chapter key={chapter.id} id={chapter.id} name={chapter.reference} />
            })}
        </div>
    )
}

export default Explore;
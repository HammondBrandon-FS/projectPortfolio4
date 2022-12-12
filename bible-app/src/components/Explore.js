// Explore Page

import Chapter from '../components/Chapter';


const Explore = props => {
    return (
        <div>
            <h2>Chapters</h2>
            {props.data.data.map(chapter => {
                return <Chapter key={chapter.id} id={chapter.id} name={chapter.reference} url={props.url} setChapters={props.setChapters}/>
            })}
        </div>
    )
}

export default Explore;
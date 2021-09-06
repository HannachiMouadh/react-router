import React,{useState} from 'react'
import Filter from './Filter'
import MovieCard from './MovieCard'

export default function MovieList({Movies}) {
    const [text, settext] = useState("")
    const [rate, setrate] = useState("")
    const filterText=(text)=>{
        settext(text)
    }
    const filterRate=(rate)=>{
        setrate(rate)
    }
    return (
        <div className="movie-list">
            <Filter filterRate={filterRate} filterText={filterText}/>
            {Movies.filter((el)=>el.name.toLowerCase().includes(text.toLocaleLowerCase())&&el.rating>=rate).map((el)=> (<MovieCard Movie={el}/>))}
        </div>
    )
}

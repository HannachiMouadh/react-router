import React from 'react'
import ReactStars from 'react-rating-stars-component'

export default function Filter({filterText,filterRate}) {
    return (
        <div className="filter">
            <input type="text" placeholder="search here" onChange={(e)=>filterText(e.target.value)}/>
            <ReactStars
                    count={5}
                    onChange={(newRating)=>filterRate(newRating)}
                    size={24}
                    activeColor="#ffd700"
                />
        </div>
    )
}

import React from 'react'
import StarRating from './StarRating'
import '../styles/Color.css'

const Color = ({ title, color, rating=0, onRemove=f=>f, onRate=f=>f }) =>
    <div className="color">
         <button className="floatRight" onClick={onRemove}>X</button>
        <h1 className="floatCenter">{title}</h1>
       
        <div className="colorDisplay" 
            style={{backgroundColor:color}}>
        </div>
        <div>
            <StarRating starsSelected={rating} onRate={onRate} />
        </div>
    </div>

export default Color    
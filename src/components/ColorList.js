import React from 'react'
import Color from './Color'
import '../styles/colorList.css'

const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f}) =>
    <div className="colorList">
        {(colors.length === 0) ? 
            <p>No Colors Listed !!</p> :
            colors.map(color => 
                <Color key={color.id} 
                {...color} 
                onRate={(rating) => onRate(color.id, rating)}
                onRemove={() => onRemove(color.id)}
                />
                )}
    </div>

export default ColorList    
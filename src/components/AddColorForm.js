import React from 'react'
import '../styles/inputFormat.css'

const AddColorForm = ({onNewColor=f=>f}) => {
    let _title, _color

    const submit = e=> {
        e.preventDefault()
        onNewColor(_title.value,_color.value)
        _title.value = ''
        _color.value ='#000000'
        _title.focus()
    }
    return(
        <div>
        <form  className='inputFormat' onSubmit={submit}>
            <input className="inputText" ref={input=>_title = input}
            type="text"
             placeholder="color title..." required/>
            <input ref={input=>_color = input}
            type="color" required/>
            <button className="inputBtn">ADD</button>
        </form>
        </div>
    )
}


export default AddColorForm
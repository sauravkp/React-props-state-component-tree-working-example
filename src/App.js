import React from 'react'
import { v4 } from 'uuid'
import AddColorForm from './components/AddColorForm'
import ColorList from './components/ColorList'

class APP extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            colors:[
                {
                    "id":"0175d1f0-a8c6-41bf-8d02-df5734d829a4",
                    "title":"ocean at dusk",
                    "color":"#00c4e2",
                    "rating":5
                },
                {
                    "id":"83c7ba2f-7392-4d7d-9e23-35adbe186046",
                    "title":"lawn",
                    "color":"#26ac56",
                    "rating":3
                }
            ]
        }
        this.addColor = this.addColor.bind(this)
        this.rateColor = this.rateColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {id:v4(),
             title,
             color,
             rating:0
            }
        ]
        this.setState({colors})
    }

    rateColor(id, rating) {

        const colors = this.state.colors.map (color => 
            (color.id !== id) ? 
                color:
                {
                    ...color,
                    rating
                }
            )
        this.setState({colors})    
    }

    removeColor(id) {
        const colors = this.state.colors.filter(
            color => color.id !== id
            )
        this.setState({colors})    
    }
    render() {
        const {addColor, rateColor, removeColor} = this
        const {colors} = this.state
        return(
            <div className='app'>
                <AddColorForm onNewColor={addColor}/>
                <ColorList colors={colors} 
                           onRate={rateColor}
                           onRemove={removeColor} 
                />
            </div>
        )
    }
}

// const APP = ({onNewColor=f=>f}) => {
//     let _title, _color

//     const submit = e=> {
//         e.preventDefault()
//         onNewColor(_title.value,_color.value)
//         _title.value = ''
//         _color.value ='#000000'
//         _title.focus()
//     }
//     return(
//         <form onSubmit={submit}>
//             <input ref={input=>_title = input}
//             type="text"
//             placeholder="color title..." required/>
//             <input ref={input=>_color = input}
//             type="color" required/>
//             <button>ADD</button>
//         </form>
//     )
// }

// class APP extends React.Component {
//     constructor(props) {
//         super(props)
//         this.submit = this.submit.bind(this)
//     }

//     submit() {
//         const {_title, _color} = this.refs
//         // e.preventDefault();
//         // alert(`New Color: ${_title.value} ${_color.value}`)
//         this.props.onNewColor(_title.value,_color.value)
//         _title.value = '';
//         _color.value= '#000000';
//         _title.focus();
//     }
//     render(){
//         return (
//             <form onSubmit={this.submit}>
//                 <input ref= "_title" type="text" 
//                     placeholder="color title..." required/>
//                 <input ref="_color" type="color" required/>
//                 <button>ADD</button>    
//             </form>
//         )
//     }
// }

export default APP
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import APP from './App';
import * as serviceWorker from './serviceWorker';
//import StarRating from './components/StarRating';

ReactDOM.render(<APP />, document.getElementById('root'));

// ReactDOM.render(<App  onNewColor = {(title,color) => {
//     console.log(`TODO: add new ${title} and ${color} to the list`)
//     console.log(`TODO: Render UI with new color`)
// }}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

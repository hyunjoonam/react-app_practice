import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import MyFirstComponent from './MyFirstComponent.js';

let BogusApp = <h2>it is bogusapp</h2>
let MySecondComponent = () => {
    return <h1>this is a component</h1>
}



// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<h1>this is just an h1</h1>, document.getElementById('root'));
// ReactDOM.render(BogusApp, document.getElementById('root'));
// ReactDOM.render(<MySecondComponent />, document.getElementById('root'));
// (((NOT WORKING))) ReactDOM.render(MySecondComponent, document.getElementById('root')); 
ReactDOM.render(<MyFirstComponent foo="bars" biz="baaazz" />, document.getElementById('root'));
// registerServiceWorker();

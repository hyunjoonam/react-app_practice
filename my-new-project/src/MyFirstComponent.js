import React from 'react';

import App from './App.js';

let MyFirstComponent = (props) => {
    console.log(props);
    var myNumber = 3;
    for (var i=0; i<10; i++) {
        myNumber++;
    }
    return (
        <div>
            {props.foo}
            {myNumber}
            <div>
                <App />
            </div>
        </div>
    )
}

export default MyFirstComponent;
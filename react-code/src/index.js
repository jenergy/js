import React from 'react';
import { render } from 'react-dom';
import ComponentCompare from './Compont.js';
import Hook from './Hooks.js';
import Context from './Context.js';
import Event from './Event.js';

function App(props) {
    return (
        <React.Fragment>
            {/* <ComponentCompare /> */}
            {/* <Hook /> */}
            {/* <Context /> */}
            <Event />
        </React.Fragment>
    );
}

render(<App />, document.querySelector('#app'));
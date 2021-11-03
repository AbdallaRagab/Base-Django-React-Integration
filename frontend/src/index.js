import React from 'react';
import { render } from 'react-dom'


export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return <h1>Hi</h1>;
    }
}
const AppPlacement = document.getElementById('app')
render(<App />, AppPlacement)
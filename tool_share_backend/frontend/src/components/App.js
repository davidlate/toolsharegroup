import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";


export default class App extends Component {
    constructor(props) {
        super(props);

    }


    render(){
        return (<div>
        <HomePage />
        </div>)

    }
}

const appDiv = document.querySelector('#app');

render(<App name='tim' />, appDiv);

import React from 'react';

import Streaming from './Streaming/Streaming.jsx';
import Header from './Header/Header.jsx';
import style from './style.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Streaming/>
            </div>
        )
    }
}

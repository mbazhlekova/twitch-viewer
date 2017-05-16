import React from 'react';

import Streaming from './Streaming.jsx';
import Header from './Header.jsx';

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

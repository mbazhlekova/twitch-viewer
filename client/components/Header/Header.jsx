import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="logo">
                       {<img src={require(`./Combo_White_RGB.png`)}/>}
                    </div>
                </nav>
            </header>
        )
    }

}
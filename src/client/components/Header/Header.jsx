import React from 'react';

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
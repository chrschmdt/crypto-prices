import React, {Component} from 'react';
import $ from 'jquery';

class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <img src="./assets/nonstop.svg" alt="logo" style={logoStyle}/>
                <img id='spinner' src="./assets/refresh.svg" alt="logo" style={logoStyle} className="pointer" onClick={()=>{
                    this.props.update();
                    let $spin = $('#spinner');
                    $spin.addClass('spin').on('animationend', () => $spin.removeClass('spin'));
                }}/>
            </header>
        );
    }
}

let headerStyle = {
    width: '100vw',
    height: '60px',
    backgroundColor: 'rgba(171,0,240,1)',
    color: "#fff",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
};

let logoStyle = {
    height: '100%',
    width: 'auto',
    padding: '8px 20px'
};

export default Header;
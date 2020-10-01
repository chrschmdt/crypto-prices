import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <img src="./assets/nonstop.svg" alt="logo" style={logoStyle}/>
                <div style={menuStyle}>
                    <Link style={linkStyle} to="/">Home</Link>
                    <Link style={linkStyle} to="/about">About</Link>
                </div>
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
    justifyContent: 'space-between',
    alignContent: 'center'
};

let logoStyle = {
    height: '100%',
    width: 'auto',
    padding: '8px 20px',
};

let menuStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    width: 'auto',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
    margin: 'auto',
};

let linkStyle = {
    color: '#fff',
    fontSize: '1.2rem',
    margin: 'auto',
    padding: '12px',
    lineHeight: '1',
};

export default Header;
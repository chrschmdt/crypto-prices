import React, {Component} from 'react';

class Listing extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div style={listingStyle} className="blue-shadow" onClick={() => {this.props.update(this.props.title)}}>
                <p style={centerText}>{this.props.title}</p>
                <span style={centerText} className={(this.props.percentChange >= 0)?"ml-3 badge badge-success":"ml-3 badge badge-danger"}>{this.props.percentChange.toFixed(2)}%</span>
            </div>
        );
    }
}

let listingStyle = {
    width: '90%',
    height: '50px',
    padding: '8px 20px',
    borderRadius: '25px',
    border: '1px solid #000',
    backgroundColor: '#ededf6',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#000',
    margin: '20px auto 0 auto',
    alignContent: 'center',
    fontFamily: 'monospace',
    fontSize: '1.8rem',
    whiteSpace: 'nowrap',
    overflowY: 'scroll',
};

let centerText = {
    margin: 'auto 0',
    height: 'auto',
    lineHeight: '1',
};

export default Listing;
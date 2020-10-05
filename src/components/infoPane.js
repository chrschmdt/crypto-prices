import React, {Component} from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class InfoPane extends Component {

    constructor(props){
        super(props);
        this.state = {
            weekLong: false,
        };
    }

    render() {

        let used = this.state.weekLong ? this.props.data : this.props.data.slice(144, 168);
        let positive = (used[used.length-1] - used[0]) >= 0;

        return (
            <div style={infoPaneStyle}>
                <h3 style={{ color: '#000', fontFamily: 'monospace', textDecoration: 'underline' }}>
                    {this.props.title}
                    <span className={positive?"ml-3 badge badge-success":"ml-3 badge badge-danger"}>{this.props.price<0 ? '' : '$' + this.props.price}</span>
                </h3>
                <Sparklines data={used} style={{ margin: '16px 0', borderLeft: '1px solid #000', borderBottom: '1px solid #000' }} margin={0} offset={0} min={Math.min(...used) - (Math.max(...used) - Math.min(...used))}>
                    <SparklinesLine color={positive?green:red} style={{ fill: (positive?green:red) }} />
                </Sparklines>
                <p style={{ fontFamily: 'sans-serif', overflowWrap: 'break-word' }} dangerouslySetInnerHTML={{__html: this.props.desc}}></p>
            </div>
        );
    }
}

let green = "rgb(61, 255, 110, 1)";
let red = "rgb(255, 80, 61, 1)";

let infoPaneStyle = {
    width: '90%',
    height: 'calc(100% - 40px)',
    padding: '20px',
    boxShadow: '4px 4px 0 1px rgba(171,0,240,1)',
    margin: 'auto',
    backgroundColor: '#ededf6',
    borderRadius: '25px',
    border: '1px solid #000',
    overflowX: 'hidden',
};

export default InfoPane;
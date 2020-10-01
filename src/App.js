import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from './components/header';
import Listing from './components/listing';
import InfoPane from './components/infoPane';
import About from './components/pages/about';
import axios from 'axios';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.welcomeMessage = 'Welcome';
        this.state = {
            coins: ['bitcoin', 'litecoin', 'dogecoin', 'based-money', 'ethereum', 'tron', 'ripple', 'tether', 'bitcoin-cash', 'tezos', 'chainlink', 'polkadot', 'monero', 'stellar', 'neo'],
            data: {},
            listings: [],
            info: {
                title: this.welcomeMessage,
                data: [],
                desc: 'Click a listing to begin.',
                price: -1,
            },
            id: '',
        };
    }

    getData = () => {
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${this.state.coins.join('%2C')}&vs_currencies=usd&include_24hr_change=true`)
            .then(res => {

                // set data object in state
                this.setState({data: res.data});

                // set listings list based on data
                let listings = [];
                for (const key in this.state.data){
                    listings.push({
                        title: key.toString(),
                        change: this.state.data[key]['usd_24h_change'],
                    })
                }
                this.setState({listings: listings});

            });
    };

    setInfo = (id) => {
        if (id === '') return;
        this.setState({id: id});
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
            .then(res => {
                this.setState({
                    info: {
                        title: res.data['name'],
                        data: res.data['market_data']['sparkline_7d']['price'],
                        desc: res.data['description']['en'],
                        price: res.data['market_data']['current_price']['usd'].toFixed(3),
                    }
                });
            });
    };

    componentDidMount(){
        this.getData();
    }

    update = () => {
        this.getData();
        this.setInfo(this.state.id)
    };

    render() {
        return (
            <Router>
                <Header update={this.update} />
                <Route exact path="/" render={props => (
                    <div className="row" style={{ margin: '0 20px', height: 'calc(100vh - 60px)' }}>
                        <div id="listings" className="col-md-6" style={{ padding: '0 0 20px 0', overflowY: 'scroll', maxHeight: '100%'}}>
                            {this.state.listings.map(listing => (
                                <Listing update={this.setInfo} key={listing.title} title={listing.title} percentChange={listing.change}/>
                            ))}
                        </div>
                        <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxHeight: '100%', padding: '0' }}>
                            <InfoPane title={this.state.info.title} data={this.state.info.data} desc={this.state.info.desc} price={this.state.info.price}/>
                        </div>
                    </div>
                )}/>
                <Route path="/about" component={About}/>
            </Router>
        );
    }
}

export default App;

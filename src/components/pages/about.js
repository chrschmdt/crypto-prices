import React from 'react';

function About(props) {
    return (
        <React.Fragment>
            <h2 style={headingStyle}>This basic React app fetches prices of a handful of crypto tokens from the coingecko API. Click on a listing for a 24 hour sparkline and more details!</h2>
        </React.Fragment>
    );
}

let headingStyle = {
    textAlign: 'center',
    width: '80%',
    height: 'auto',
    margin: ' 24px auto',
};

export default About;
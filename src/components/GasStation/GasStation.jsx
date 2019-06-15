import React, { Component } from 'react';

class GasStation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { station } = this.props;
        return (
            <div>{station.address}</div>
        )
    }
}

export default GasStation;
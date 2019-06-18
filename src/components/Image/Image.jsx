import React, { Component } from 'react';
import './styles.css';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: props.src,
            errored: false
        };
    }

    onError = () => {
        // the errored state is to protect against an infinite loop if the fallback image is not able to be retrieved
        if(!this.state.errored) {
            const { fallBackSrc } = this.props;
            this.setState({
                src: fallBackSrc,
                errored: true
            });
        }
    }

    render() {
        const { src } = this.state;

        return(
            <img src={src} onError={this.onError}></img>
        )
    }
}

export default Image;
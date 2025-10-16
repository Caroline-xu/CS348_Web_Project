import React, { useState, useEffect, useRef } from 'react';
import Details from './Details';
import DetailButton from './DetailButton';
import Button from './DetailButton';
import {link} from './link'
class ImageCard extends React.Component {
    //state = { err: "" }

    constructor(props) {
        super(props)
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans })
    }

    // later change onclick of button !!!
    seeDetails = async (e) => {
        e.preventDefault()
        try {
            // await
            this.props.navigate("/details")
            console.log("success!")
        } catch (err) {
            //this.setError('Failed to see details of this product')
        }
    }

    render() {
        return (

            <div style={{ gridRowEnd:`span ${this.state.spans}` }}>
                <img 
                    ref={this.imageRef}
                    alt={this.props.image.description} 
                    src={this.props.image.urls.regular} 
                />
                <br />
                <DetailButton />
            </div>
                
        )
    };
}


export default ImageCard; 
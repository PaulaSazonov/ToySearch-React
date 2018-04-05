import React, {Component} from 'react';
import {Thumbnail} from 'react-bootstrap';
import toy from '../toy.png';
import {Col} from 'react-bootstrap';

class Toy extends Component {
    render () {
        return (
            <Col md={3}>
                <Thumbnail src={toy}>
                    <p>{this.props.toy.producer}</p>
                    <p>{this.props.toy.name}</p>
                    <p>{this.props.toy.price}</p>
                    <p><a href={this.props.toy.urlToWebStore}>{this.props.toy.webstoreName} </a> </p>
                </Thumbnail>
            </Col>
        )
    }
}
export default Toy;
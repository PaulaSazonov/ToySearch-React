import React, {Component} from 'react';
import {Thumbnail} from 'react-bootstrap';
import toy from '../toy.png';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Toy extends Component {
    render () {
        return (
            <Col md={3}>
                <Thumbnail src={toy}>
                    <p>{this.props.toy.producer}</p>
                    <p>{this.props.toy.name}</p>
                    <p>{new Intl.NumberFormat('fi-FI', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(this.props.toy.lowestPrice)}</p>
                    <p><a href={this.props.toy.urlToWebStore}> {this.props.toy.webstoreName} </a> </p>
                    <Link to={"/tuote/"+ this.props.id}>Tuotteen tietoihin</Link>

                </Thumbnail>
            </Col>
        )
    }
}
export default Toy;
import React, {Component} from 'react';
import {Thumbnail} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Toy extends Component {
    constructor(props) {
        super(props);
        this.state ={urltoimage: props.toy.details[0].urlToImage};
    }
    backupImage = () => {
        this.setState({urltoimage: '/Images/teddy.jpg'});
    }
    render () {
        return (
            <Col xs={1} sm={2} md={3} lg={4}>
                <Thumbnail src={this.state.urltoimage} onError={this.backupImage}>
                    <p>{this.props.toy.producer}</p>
                    <p>{this.props.toy.name}</p>
                    <p>{new Intl.NumberFormat('fi-FI', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(this.props.toy.lowestPrice)}</p>
                    <p><a href={this.props.toy.urlToWebStore}> {this.props.toy.webstoreName} </a> </p>
                    <Link className="storeLink" to={"/tuote/"+ this.props.id}>Tuotteen tietoihin</Link>

                </Thumbnail>
            </Col>
        )
    }
}
export default Toy;
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
        this.setState({urltoimage: '/Images/teddythumbnail.png'});
    }
    render () {
        return (
            <Col xs={1} sm={2} md={3} lg={4}>
                <Link to={"/tuote/"+ this.props.id}>
                    <div>
                    <Thumbnail src={this.state.urltoimage} onError={this.backupImage}>
                        <p>{this.props.toy.producer}</p>
                        <div className="toydetails">{this.props.toy.name}</div>
                        <p>{new Intl.NumberFormat('fi-FI', {
                            style: 'currency',
                            currency: 'EUR'
                        }).format(this.props.toy.lowestPrice)}</p>
                        <p><a href={this.props.toy.urlToWebStore}> {this.props.toy.webstoreName} </a> </p>
                        {/*<div className="linktostore">*/}
                            {/*<Link className="storeLink" to={"/tuote/"+ this.props.id}>Tuotteen tietoihin*/}
                        {/*</div>*/}
                    </Thumbnail>
                    </div>
                </Link>
            </Col>
        )
    }
}
export default Toy;
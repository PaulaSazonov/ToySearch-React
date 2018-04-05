import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';

class ProductPage extends Component {
    render () {
        return (

            <div>
                <PageHeader> Tuotteen tiedot </PageHeader>
                <p>{this.props.match.params.id}</p>
                <p>{this.props.data}</p>

            </div>
        )
    }
}

export default ProductPage;
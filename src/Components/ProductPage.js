import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {getToysById} from "../ServiceClient";

class ProductPage extends Component {
    constructor(props) {
        super(props);

        this.state= {
            toys: this.props.toys,
            wantedId: this.props.match.params.id,
            product: null
        };
    }
    componentDidMount = () => {
        this.getProductById(this.state.wantedId);
    };

    getProductById = (id) => {
        getToysById(id,function (receivedProducts) {
            this.setState({product: receivedProducts})
        }.bind(this))
    };

    render () {
        if (!this.state.product||this.state.product.length===0) {
            return null;
        };

        let storeList = this.state.product.details.map(t => (
            <tr key={this.state.product.name}>
                <td>
                    {this.state.product.name}
                </td>
                <td>
                    {new Intl.NumberFormat('fi-FI', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(t.price)}
                </td>
                <td>
                    {t.webstoreName}
                </td>
                <td>
                    <a href={t.urlToWebstore}>Siirry myyjän sivuille</a>
                </td>
            </tr>
        ));
        return (
            <div>
                <h1 className="page-header"> Tuotteen tiedot </h1>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Tuote
                            </th>
                            <th>
                                Hinta
                            </th>
                            <th>
                                Myyjä
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                    {storeList}
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default ProductPage;
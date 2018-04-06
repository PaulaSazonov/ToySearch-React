import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

class ProductPage extends Component {
    constructor(props) {
        super(props);

        this.state= {
            toys: this.props.toys,
            wantedId: this.props.match.params.id,
            product: {}
        }
    }

    render () {
        let product;
        for (let i = 0; i<this.props.toys.length; i++){
            if (this.props.toys[i].id === this.state.wantedId){
                product= this.props.toys[i].source;
            }
        }
        return (
            <div>
                <PageHeader> Tuotteen tiedot </PageHeader>
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
                    <tr>
                        <td>
                            {product&&product.name}
                        </td>
                        <td>
                            {product&&product.price}
                        </td>
                        <td>
                            {product&&product.webstoreName}
                        </td>
                        <td><a href={product&&product.urlToWebStore}>Siirry myyjän sivuille</a>
                        </td>
                    </tr>
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default ProductPage;
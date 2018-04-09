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
            product: {}
        }
    }
/*
    componentDidMount = () => {
        this.getProductById('61lyqmIBfpKc0tS_YXsz');
    };

    getProductById = () => {
        getToysById(function (list) {
            console.log(list);
        }.bind(this))
    };*/

    render () {
        let product;
        for (let i = 0; i<this.props.toys.length; i++){
            if (this.props.toys[i].id === this.state.wantedId){
                product= this.props.toys[i].source;
            }
        }

        let storeList = product.details.map(t => (<tr>
                <td>
                    {product.name}
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
        ))
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
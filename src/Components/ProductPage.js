import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';

class ProductPage extends Component {
    constructor(props) {
        super(props)

        this.state= {
            toys: this.props.alltoys,
            wantedId: this.props.match.params.id,
            product: {}
        }

    //     for (var i = 0; i<this.state.toys.length; i++){
    //         if (this.state.toys[i].id === this.state.wantedId){
    //             this.state.product = this.state.toys[i];
    //         }
    //     }
    }



    render () {
        return (
            <div>
                <PageHeader> Tuotteen tiedot </PageHeader>
                <p>{this.state.product.name}</p>

            </div>
        )
    }
}

export default ProductPage;
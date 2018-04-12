import React, {Component} from 'react';
import Toy from './Toy';
import '../Stylesheets/App.css';
import {Col, Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import ItemPagination from "./ItemPagination";

class ToyList extends Component {
    render () {
        // console.log(this.props.toys);
        let all = this.props.toys
            .map(function (toy) {
                return (<Toy toy={toy.source} key={toy.id} id={toy.id}/>)
            });
        return(
            <Grid className="container">
                <Row md={9} className="show-grid row-no-padding flex-row">
                    {all}
                </Row>
                <Row>
                    <Col md={9} mdOffset={3}>
                    </Col>
                </Row>
            </Grid>

        )
    }
}
export default ToyList;
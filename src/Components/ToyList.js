import React, {Component} from 'react';
import Toy from './Toy';
import '../App.css';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

class ToyList extends Component {
    render () {
        var all = this.props.toys
            .map(function (toy) {
                return (<Toy toy={toy.source} key={toy.id}></Toy>)
                
            });
        return(
            <Grid className="container">
                <Row md={9} className="show-grid row-no-padding flex-row">
                    {all}
                </Row>
            </Grid>

        )
    }
}
export default ToyList;
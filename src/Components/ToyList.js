import React, {Component} from 'react';
import Toy from './Toy';
import '../Stylesheets/App.css';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

class ToyList extends Component {
    render () {
        let all = this.props.toys
            .map(function (toy) {
                return (<Toy toy={toy.source} key={toy.id} id={toy.id}/>)
                
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
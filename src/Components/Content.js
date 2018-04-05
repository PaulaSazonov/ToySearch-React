import React, { Component } from 'react';
import ToyList from './ToyList'
import Search from './Search';
import Filter from './Filter';
import {getAllToys} from "../ServiceClient";
import {getToysByProducer} from "../ServiceClient";
import {PageHeader} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class Content extends Component {
    state = {toys: [], notfound: false}

    componentDidMount = () => {
        this.getListAndUpdate();
    }

    getSearched = (producer) => {
        getToysByProducer(producer, function (list, error) {
            if (error){
                this.setState({notfound: true});

            } else {
                this.setState({toys: list, notfound: false})
            }
        }.bind(this))
    }

    getListAndUpdate = () => {
        getAllToys(function (list) {
            this.setState({toys: list})
        }.bind(this))
    }

    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader> Leluhaku </PageHeader>
                </Row>
                <Row>
                    <Search getSearched={this.getSearched}/>
                </Row>
                <Row>
                    <Col md={3}>
                        <Filter getSearched={this.getSearched}/>
                    </Col>
                    <Col md={9}>
                        {this.state.notfound ?
                            <p>Hakusanalla ei löytynyt tuotteita</p>
                            :
                            <ToyList toys={this.state.toys}/>
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Content;
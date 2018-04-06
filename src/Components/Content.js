import React, { Component } from 'react';
import ToyList from './ToyList'
import Search from './Search';
import Filter from './Filter';
import {PageHeader} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            notfound: false
        }
    }

    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader> Leluhaku </PageHeader>
                </Row>
                <Row>
                    <Search getSearched={this.props.getSearched}/>
                </Row>
                <Row>
                    <Col md={3}>
                        <Filter getSearched={this.props.getSearched}/>
                    </Col>
                    <Col md={9}>
                        {this.state.notfound ?
                            <p>Hakusanalla ei löytynyt tuotteita</p>
                            :
                            <ToyList toys={this.props.toys}/>
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Content;
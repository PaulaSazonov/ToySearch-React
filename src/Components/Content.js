import React, { Component } from 'react';
import ToyList from './ToyList'
import Search from './Search';
import Filter from './Filter';
import {PageHeader} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import logo from '../Images/Lelukauppa.png'

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
                    <Col>
                        <div className="pageHeader">
                            <Image responsive src={logo} alt=""/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Search getSearched={this.props.getSearched}/>
                </Row>
                <Row>
                    <Col md={3}>
                        <Filter getSearched={this.props.getSearched} getFilteredByPrice={this.props.getFilteredByPrice} producers={this.props.producers} getFilteredByProducer={this.props.getFilteredByProducer} getSearchedWithFilters={this.props.getSearchedWithFilters}/>
                    </Col>
                    <Col  md={9}>
                        {this.state.notfound ?
                            <p>Hakusanalla ei löytynyt tuotteita</p>
                            :
                            <ToyList toys={this.props.toys}/>
                        }
                    </Col>
                </Row>
                <Row>
                    <div className="footerbar"> Lindblom, Lajunen, Sazonov 2018</div>
                </Row>
            </Grid>
        );
    }
}

export default Content;
import React, {Component} from 'react';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import '../Stylesheets/App.css';

class Search extends Component {
    state = {toys: [], producer: ''};

    makeASearch = (event) => {
        event.preventDefault();
        this.setState({producer: event.target.value})
        this.props.getSearched(this.state.producer);
    };

    producerValueChanged = (event) => {
        this.setState({producer: event.target.value})
    };

    render () {
        return (
            <div className="searchbar">
                <form onSubmit={this.makeASearch}>
                    <FormGroup bsSize="lg">
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="search"/>
                            </InputGroup.Addon>
                            <FormControl bsSize="large" value={this.state.producer} onChange={this.makeASearch} type="text" placeholder="Hae leluja"/>
                        </InputGroup>
                    </FormGroup>
                </form>
            </div>
        )
    }
}

export default Search;
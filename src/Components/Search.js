import React, {Component} from 'react';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../Stylesheets/App.css';

class Search extends Component {
    state = {toys: [], producer: ''};

    makeASearch = (event) => {
        event.preventDefault();
        this.props.getSearched(this.state.producer);
    };

    producerValueChanged = (event) => {
        this.setState({producer: event.target.value})
    };

    render () {
        return (
            <div>
                <form onSubmit={this.makeASearch}>
                    <FormGroup bsSize="large">
                        <InputGroup>
                            <FormControl value={this.state.producer} onChange={this.producerValueChanged} type="text" placeholder="Hae leluja" />
                            <InputGroup.Button>
                                <Button onClick={this.makeASearch}>
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="search" />
                                    </InputGroup.Addon>
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </form>
            </div>
        )
    }
}

export default Search;
import React, {Component} from 'react';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
// import BootstrapSlider from 'bootstrap-slider/dist/css/bootstrap-slider.min.css';
import '../Stylesheets/bootstrap-slider.min.css'
import '../Stylesheets/App.css';


class Filter extends Component {
    state = {toys: [], producer: '', min: 0, max: 500, step: 10, currentValue: 250};

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
                <br/>
                <div className="priceslider">
                    <div>
                    <ControlLabel>Rajaa hinnan mukaan</ControlLabel>
                    </div>
                    <div>
                        <span>0€ <ReactBootstrapSlider
                        value={this.state.currentValue}
                        slideStop={this.changeValue}
                        step={this.state.step}
                        max={this.state.max}
                        min={this.state.min}
                        orientation="horizontal"
                        reversed={false}/> 500€</span>
                    </div>
                </div>
                <br/>
                <div className="producerfilter">
                    <form onSubmit={this.makeASearch}>
                        <ControlLabel>Rajaa valmistajan mukaan</ControlLabel>
                        <FormGroup bsSize="small">
                            <FormControl value={this.state.producer} onChange={this.producerValueChanged} type="text" placeholder="Valmistajan nimi" />
                        </FormGroup>
                    </form>
                </div>

            </div>
        )
    }
}
export default Filter;
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
                <form onSubmit={this.makeASearch}>
                    <ControlLabel>Rajaa valmistajan mukaan</ControlLabel>
                    <FormGroup bsSize="small">
                        <FormControl value={this.state.producer} onChange={this.producerValueChanged} type="text" placeholder="Valmistajan nimi" />
                    </FormGroup>
                </form>
                <div>
                <br/>
                    <div>
                        <ControlLabel>Rajaa hinnan mukaan</ControlLabel>
                        <br/>
                    <span>0 </span><ReactBootstrapSlider
                        value={this.state.currentValue}
                        slideStop={this.changeValue}
                        step={this.state.step}
                        max={this.state.max}
                        min={this.state.min}
                        orientation="horizontal"
                        reversed={false}/><span>500</span>
                    </div>
                {/*<form>*/}
                    {/*<FormGroup bsSize="small" controlId="formControlsSelect">*/}
                        {/*<ControlLabel>Rajaa hinnan mukaan</ControlLabel>*/}
                        {/*<FormControl componentClass="select" placeholder="Rajaa hinnan mukaan">*/}
                            {/*<option value="ten">Hinta max 10€</option>*/}
                            {/*<option value="twenty">Hinta max 20€</option>*/}
                            {/*<option value="thirty">Hinta max 30€</option>*/}
                            {/*<option value="forty">Hinta max 40€</option>*/}
                        {/*</FormControl>*/}
                    {/*</FormGroup>*/}
                {/*</form>*/}
                </div>
            </div>
        )
    }
}
export default Filter;
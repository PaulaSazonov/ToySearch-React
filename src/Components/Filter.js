import React, {Component} from 'react';
import {ControlLabel, Button} from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import '../Stylesheets/bootstrap-slider.min.css'
import '../Stylesheets/App.css';

import Checkbox from './Checkbox';



class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {toys: [], producer: '', min: 0, step: 5, currentValue: this.props.sliderValue};
    }

    componentWillMount = () => {
        this.selectedCheckboxes = new Set(); //creates an empty set that is used to store selected checkboxes
    }

    /**
     * when form submits, prints to console selected checkboxes --> TO BE UPDATED!
     * @param formSubmitEvent
     */

    makeASearch = (event) => {
        event.preventDefault();
        console.log(this.selectedCheckboxes);
        console.log(this.state.currentValue);
        // this.props.getFilteredByProducer(this.selectedCheckboxes);
        console.log(this.props);
        this.props.getFilteredByProducer(this.selectedCheckboxes);
    };

    producerValueChanged = (event) => {
        this.setState({producer: event.target.value})
    };

    changeValue = (event) => {
        this.setState({currentValue: event.target.value});
        this.props.getFilteredByPrice(this.state.currentValue);
    };

    /**
     * contents of the selectedCheckboxes set is changed based on user actions
     * if user has already selected the checkbox (= label is in set), user toggled to unselect the box -> delete label from set
     * if user hasn't selected the checkbox, user toggled to select the box -> add label to set
     * @param label
     */
    toggleCheckbox = label => {
        if(this.selectedCheckboxes.has(label)){
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    /**
     * calls toggleCheckbox function each time checkbox is selected / unselected
     * label: rendered next to checkbox
     * id: unique id
     * @param label
     * @returns {*}
     */
    createCheckbox = label => (
        <div>
            <Checkbox
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                key={label}
            />
        </div>
    )

    /**
     * create the checkboxes from list retrieved as props
     */
    createCheckboxes = () => (
        this.props.producers.map(this.createCheckbox)
    )

    emptyFilters = () => {
        this.selectedCheckboxes.clear();
        this.props.getFilteredByProducer([]);
    }

    render () {
        let max = Math.ceil(this.props.sliderMax);
        let totalHitsText = 'Hakutuloksia yhteensä: ' + this.props.hits;
        let emptyButton;

        if(this.selectedCheckboxes.size !== 0){
            emptyButton = <Button onClick={this.emptyFilters}>Tyhjennä</Button>;
        }

        return (
            <div>
                <br/>
                <div className="totalHits">
                    <ControlLabel>{totalHitsText}</ControlLabel>
                </div>
                <br/>
                <div className="priceslider">
                    <div>
                    <ControlLabel>Hintakatto</ControlLabel>
                    </div>
                    <div>
                        <div id="pricerange"><span>{this.state.min}€</span><span>{max}€</span></div>
                        <ReactBootstrapSlider
                        value={this.state.currentValue}
                        slideStop={this.changeValue}
                        step={this.state.step}
                        max={this.props.sliderMax}
                        min={this.state.min}
                        orientation="horizontal"
                        reversed={false}/>
                    </div>
                </div>
                <br/>
                <div className="producerfilter">
                    <form onSubmit={this.makeASearch}>
                        <ControlLabel>Rajaa valmistajan mukaan</ControlLabel>
                        {this.createCheckboxes()}

                        <Button type="submit">Rajaa</Button>
                        {emptyButton}
                    </form>
                </div>

            </div>
        )
    }
}
export default Filter;
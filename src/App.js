import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductPage from './Components/ProductPage';
import {getAllToys, getToysBySearchTerm, getAllToys2, getToysBySearchTermAndFilter} from "./ServiceClient";
import Content from './Components/Content';
import NotFound from './Components/NotFound';

class App extends Component {
    state = {
        toys: [],
        producers: [],
        activePrice: '',
        activeProducerList: [],
        activeSearchTerm: '',
        sliderMax: 200,
        sliderValue: 200
    };

    componentDidMount = () => {
        this.getListAndUpdate();
    };

    getListAndUpdate = () => {
        getAllToys2(function (list) {
            this.setState({toys: list[0].hits, producers: list[1]});
        }.bind(this))
    };

    getSearched = (SearchTerm) => {
        getToysBySearchTerm(SearchTerm, function (list, error) {
            if (error){
                this.setState({notfound: true});
            } else {
                this.setState({toys: list[0].hits, notfound: false});
                this.setState({producers: list[1], notfound: false});
            }
        }.bind(this))
    };

    getSearchedWithFilters = (SearchTerm, Price, ProducerSet, updateSlider) => {

        this.setState({ activeSearchTerm: SearchTerm, activePrice: Price, activeProducerList: ProducerSet }, () => {
            console.log(this.state.activeProducerList);
            console.log(this.state.activePrice);
            console.log(this.state.activeSearchTerm);
            let pListAsString = '';
            this.state.activeProducerList.forEach(p => {pListAsString += p+":"});
            console.log(pListAsString);
            getToysBySearchTermAndFilter(this.state.activeSearchTerm, this.state.activePrice, pListAsString, function(list, error){
                if(error){
                    this.setState({notfound: true});
                } else {
                    this.setState({toys: list[0].hits, notfound: false});
                    this.setState({producers: list[1], notfound: false});
                    if(updateSlider===1){
                        console.log('from App.js: ' + list[2]);
                        this.setState({sliderMax: list[2], sliderValue: list[2]});
                    }
                }
            }.bind(this))
        });
    };

    getFilteredByPrice = (price) => {
        this.getSearchedWithFilters(this.state.activeSearchTerm, price, this.state.activeProducerList, 0);
    }

    getFilteredByProducer = (ProducerSet) => {
        this.getSearchedWithFilters(this.state.activeSearchTerm, this.state.activePrice, ProducerSet, 0);
    }

    getFilteredWithSearchTerm = (SearchTerm) => {
        this.getSearchedWithFilters(SearchTerm, '', [], 1);
    }

    render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <Content {...props} getSearched={this.getFilteredWithSearchTerm} toys={this.state.toys} getFilteredByPrice={this.getFilteredByPrice} producers={this.state.producers} getFilteredByProducer={this.getFilteredByProducer} sliderMax={this.state.sliderMax} sliderValue={this.state.sliderValue}/>
                        )}
                    />
                    <Route exact path="/tuote/:id" component={ProductPage}/>
                    )}
                    />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;

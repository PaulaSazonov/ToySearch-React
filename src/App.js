import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductPage from './Components/ProductPage';
import {getToysBySearchTerm, getAllToys2, getToysBySearchTermAndFilter} from "./ServiceClient";
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
        sliderValue: 200,
        page: 1,
        hits: 200
    };

    componentDidMount = () => {
        this.getListAndUpdate();
    };

    getListAndUpdate = () => {
        getAllToys2(function (list) {
            this.setState({toys: list[0].hits, producers: list[1], hits: list[0].hits.length});
        }.bind(this))
    };

    getSearched = (SearchTerm) => {
        getToysBySearchTerm(SearchTerm, function (list, error) {
            if (error){
                this.setState({notfound: true});
            } else {
                this.setState({toys: list[0].hits, hits: list[0].hits.length, notfound: false});
                this.setState({producers: list[1], notfound: false});
            }
        }.bind(this))
    };

    getSearchedWithFilters = (SearchTerm, Price, ProducerSet, updateSliderAndPage) => {

        this.setState({ activeSearchTerm: SearchTerm, activePrice: Price, activeProducerList: ProducerSet }, () => {
            let pListAsString = '';
            this.state.activeProducerList.forEach(p => {pListAsString += p+":"});
            getToysBySearchTermAndFilter(this.state.activeSearchTerm, this.state.activePrice, pListAsString, function(list, error){
                if(error){
                    this.setState({notfound: true});
                } else {
                    this.setState({toys: list[0].hits, hits: list[0].hits.length, notfound: false});
                    this.setState({producers: list[1], notfound: false});
                    if(updateSliderAndPage===1){
                        this.setState({sliderMax: list[2], sliderValue: list[2], page: 1});
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
    };

    updatePage = (pageNumber) => {
        this.setState({page: pageNumber});
    };

    render() {
        let toyListToRender = [];
        if(this.state.toys.length > 0){
            let indexes = (this.state.page-1)*24;
            let lastIndex;
            if((indexes+23) > this.state.toys.length-1) {
                lastIndex = this.state.toys.length - 1;
            } else {
                lastIndex = indexes + 23;
            }
            for(let i = indexes; i <= lastIndex; i++){
                toyListToRender.push(this.state.toys[i]);
            }
        } else {
            toyListToRender = this.state.toys;
        }
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <Content {...props} getSearched={this.getFilteredWithSearchTerm} toys={toyListToRender} getFilteredByPrice={this.getFilteredByPrice} producers={this.state.producers} getFilteredByProducer={this.getFilteredByProducer} sliderMax={this.state.sliderMax} sliderValue={this.state.sliderValue} page={this.state.page} hits={this.state.hits} updatePage={this.updatePage}/>
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

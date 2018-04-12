import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
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
        activeSearchTerm: ''
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

    getSearchedWithFilters = (SearchTerm, Price, ProducerSet) => {

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
                }
            }.bind(this))
        });
    };

    getFilteredByPrice = (price) => {
        this.getSearchedWithFilters(this.state.activeSearchTerm, price, this.state.activeProducerList);
    }

    getFilteredByProducer = (ProducerSet) => {
        this.getSearchedWithFilters(this.state.activeSearchTerm, this.state.activePrice, ProducerSet);
    }

    getFilteredWithSearchTerm = (SearchTerm) => {
        this.getSearchedWithFilters(SearchTerm, this.state.activePrice, this.state.activeProducerList);
    }

    render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <Content {...props} getSearched={this.getFilteredWithSearchTerm} toys={this.state.toys} getFilteredByPrice={this.getFilteredByPrice} producers={this.state.producers} getFilteredByProducer={this.getFilteredByProducer} getSearchedWithFilters={this.getSearchedWithFilters}/>
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

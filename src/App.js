import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import ProductPage from './Components/ProductPage';
import {getAllToys, getToysBySearchTerm, getAllToys2} from "./ServiceClient";
import Content from './Components/Content';
import NotFound from './Components/NotFound';

class App extends Component {
    state = {toys: [], producers: []};

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

    filterByPrice = (price) => {
        let alltoys= this.state.toys;
        console.log(alltoys);
        let filteredtoys = [];
        for (let i = 0; i<alltoys.length; i++){
            if (alltoys[i].source.lowestPrice <= price){
                filteredtoys.push(alltoys[i])
            }
        }
        console.log(filteredtoys)
        this.setState({toys: filteredtoys})
    }

    getFilteredByProducer = (ProducerSet) => {
        if(ProducerSet.size == 0){
            this.getListAndUpdate();
        }
        let tempToys = new Set();
        let tempProducers = new Set();

        for(var i = 0; i < this.state.toys.length; i++){
            let toy = this.state.toys[i];
            let name = toy.source.name;
            ProducerSet.forEach(function (value) {
                if(name.includes(value)){
                    console.log(name);
                    tempToys.add(toy);
                    tempProducers.add(toy.source.name.split(" ")[0]);
                }
            })
        }

        console.log(tempToys);
        console.log(tempProducers);
        this.setState({toys: Array.from(tempToys)});
        this.setState({producers: Array.from(tempProducers)});
    }

    render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <Content {...props} getSearched={this.getSearched} toys={this.state.toys} filterByPrice={this.filterByPrice} producers={this.state.producers} getFilteredByProducer={this.getFilteredByProducer}/>
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

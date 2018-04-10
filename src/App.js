import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import ProductPage from './Components/ProductPage';
import {getAllToys, getToysBySearchTerm} from "./ServiceClient";
import Content from './Components/Content';
import NotFound from './Components/Content';

class App extends Component {
    state = {toys: []};

    componentDidMount = () => {
        this.getListAndUpdate();
    };

    getListAndUpdate = () => {
        getAllToys(function (list) {
            this.setState({toys: list.hits})
        }.bind(this))
    };
    getSearched = (SearchTerm) => {
        getToysBySearchTerm(SearchTerm, function (list, error) {
            if (error){
                this.setState({notfound: true});

            } else {
                this.setState({toys: list.hits, notfound: false})
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

    render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <Content {...props} getSearched={this.getSearched} toys={this.state.toys} filterByPrice={this.filterByPrice}/>
                        )}
                    />
                    <Route exact path="/tuote/:id" component={ProductPage}/>
                    )}
                    />
                    <Redirect to="/404"/>
                    <Route exact path="/404" component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;

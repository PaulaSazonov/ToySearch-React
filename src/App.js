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

    render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <Content {...props} getSearched={this.getSearched} toys={this.state.toys}/>
                        )}
                    />
                    <Route path="/tuote/:id" component={ProductPage}/>
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

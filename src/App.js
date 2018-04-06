import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductPage from './Components/ProductPage';
import {getAllToys} from "./ServiceClient";
import Content from './Components/Content';

class App extends Component {

    state = {toys: []};

    getListAndUpdate = () => {
        getAllToys(function (list) {
            this.setState({toys: list})
        }.bind(this))

    }
    componentDidMount = () => {
        this.getListAndUpdate();

    }


    render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Content}/>
                    <Route path="/tuote/:id" component={ProductPage} render={(props) =>
                        (<ProductPage{...props} data={this.state.toys}/>)}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;

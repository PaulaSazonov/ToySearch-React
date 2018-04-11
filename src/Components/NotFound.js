import React, {Component} from 'react';
import '../Stylesheets/App.css';
import {PageHeader} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import logo from '../Images/Lelukauppa.png';

class NotFound extends Component {
    render (){
        return (
            <div>
                <PageHeader>
                    <Image responsive src={logo} alt=""/>
                </PageHeader>
                <div className="notfound">
                    <h1>Sivua ei löytynyt</h1>
                    <a href='/'>Palaa etusivulle</a>
                </div>
            </div>

        )
    }
}

export default NotFound;
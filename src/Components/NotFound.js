import React, {Component} from 'react';
import '../Stylesheets/App.css';
import {Image} from 'react-bootstrap';
import logo from '../Images/Leluhaku.png';

class NotFound extends Component {
    render (){
        return (
            <div>
                <div className="pageHeader">
                    <Image responsive src={logo} alt=""/>
                </div>
                <div className="notfound">
                    <h1 id="notfoundtext">Sivua ei löytynyt</h1>
                    <a id="linktohome" href='/'>Palaa etusivulle</a>
                </div>
            </div>

        )
    }
}

export default NotFound;
import logo from './logo.svg';
import './Header.scss'

import {React, Component} from 'react'
import {withGetScreen} from 'react-getscreen'

import HeaderRight from './HeaderRight'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="App-header">
                <div className="Header-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <HeaderRight isHamburgerOpen={this.props.isHamburgerOpen}  hamburgerHandler={this.props.hamburgerHandler} />
            </div>
        );
    }
}

export default withGetScreen(Header, {mobileLimit: 780, tabletLimit: 1000, shouldListenOnResize: true})
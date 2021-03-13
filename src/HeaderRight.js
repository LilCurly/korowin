import './Header.scss'

import {React, Component} from 'react'
import {withGetScreen} from 'react-getscreen'

import HeaderLinks from './HeaderLinks'
import {Divide as Hamburger} from 'hamburger-react'

class HeaderRight extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div className="Header-right">
                    {
                        this.props.isMobile() ?
                        <Hamburger className="Header-hamburger" toggled={this.props.isHamburgerOpen} toggle={this.props.hamburgerHandler} /> :
                        <HeaderLinks isHorizontal={true} />
                    }
                </div>
            </div>
        )
    }
}

export default withGetScreen(HeaderRight, {mobileLimit: 780, tabletLimit: 1000, shouldListenOnResize: true})
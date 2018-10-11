import React, { Component } from 'react'
import Header from '../components/header_footer/Header'

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="main_content">{this.props.children}</main>
                
            </div>

        )
    }
}


export default Layout
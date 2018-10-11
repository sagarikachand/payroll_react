import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';



class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: '#37383a',
                    boxShadow: 'none',
                    padding: ' 0',
                    height:'54px',
                    borderBottom: '2px solid #00285e'
                }}
            >
                <Toolbar style={{ display: 'flex', justifyContent : 'space-around' ,alignItems:'center'}}>
                    <div style={{ flexGrow: 0 }}>
                        <div className="header_logo">
                            LOGO
                        </div>
                    </div>
                    <div className="header_links">
                        <NavLink to="/view" activeClassName="active">
                            <Button color="inherit">Extract Viewer</Button>
                        </NavLink>
                        <NavLink to="/regenerate" activeClassName="active">
                            <Button color="inherit">Regenerate Payroll Extract</Button>
                        </NavLink>
                        <NavLink to="/config" activeClassName="active">
                            <Button color="inherit">Infotype Config</Button>
                        </NavLink>
                    </div>
                    <div>
                        User Profile
                     </div>


                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
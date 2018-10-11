import React from 'react';
import  Layout from './HOC/Layout'
import { Switch , Route , Redirect } from 'react-router-dom'
import ExtractViewer from './Container/ExtractViewer'

const Routes =(props) =>{
    return (
    <Layout>
        <Switch>
          <Route path="/view" component={ExtractViewer} />
          <Route path="/regenerate" component={ExtractViewer} />
          <Route path="/config" component={ExtractViewer} />
          <Redirect to="/view" />
        </Switch>
      
    </Layout>
    )

}


export default Routes;





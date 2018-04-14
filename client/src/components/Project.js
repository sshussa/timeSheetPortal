import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';

const Project = ({ match }) => {
    return (
<div>
   <div>
        <h1 className="display-3">Nested Routing</h1>
   </div>
    <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <ul>
                    <li><Link to={`${match.url}/cts`}>Cognizant</Link></li>        
                    </ul>
                </div>
                <div className="col-md-9">
                    <Route path={`${match.path}/cts`} render={() => { return <h1>Cognizant Timesheet Portal</h1> }}/>
                    <Route path={`${match.path}/:id`} component={Child} />
                </div>
            </div>
            </div>
</div>
    );
}
const Child = ({ match }) => (
    <div>
      <h3>URL ID parameter: {match.params.id}</h3>
    </div>
);


export default Project;
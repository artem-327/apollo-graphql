import React from 'react';
// import Axios from "axios";
// import SweetAlert from 'react-bootstrap-sweetalert';

// const backendurl = require("../backendconfig.js").url;

function Result () {

  return (
    <div className="container">
      <div className="pull-right text-right"><a className="btn btn-primary" href="/">Go Back to Home</a></div>
      
      <div className="row text-left" style={{marginTop: "50px"}}>
        <div className="col col-lg-1 col-md-1 col-sm-3 col-xs-12">User name</div>
        <div className="col col-lg-1 col-md-1 col-sm-3 col-xs-12">Short code</div>
        <div className="col col-lg-6 col-md-6 col-sm-6 col-xs-12">Real url</div>
        <div className="col col-lg-2 col-md-2 col-sm-4 col-xs-12">View stats</div>
        <div className="col col-lg-1 col-md-1 col-sm-4 col-xs-12">Delete</div>
        <div className="col col-lg-1 col-md-1 col-sm-4 col-xs-12">Visit</div>
      </div>
    </div>
  );

};

export default Result;

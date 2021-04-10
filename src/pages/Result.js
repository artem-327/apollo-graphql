import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  content: {
    width: '100%',
    height: '100px',
    borderTop: '1px solid #ddd',
    borderBottom: '1px solid #ddd'
  },
  footer: {
    width: '100%',
    height: '70px'
  },
  header: {
    width: '100%',
    height: '70px'
  }
}));


function Result () {
  const classes = useStyles();

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Compare our best mortgage rates and deals</h1>
      <div className="filter">
        <span>Results:</span>
        <div className="row mb-3">
          <div className="col-6">297 mortgages found</div>
          <div className="col-6 text-right"> Sort by :  &nbsp;
            <select className="border-none">
              <option>Monthly payment</option>
            </select>
          </div>
        </div>
      </div>
      <div className="box mt-3">
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.header}>
              <Typography component="h5" variant="h5">
                <img src='/unicredit-logo.jpg' className='credit-logo' alt='credit' /> UniCredit Bank
                <span className="float-right pt-3">
                  $682.75 <small className="color-grey">Monthly payment</small>
                </span>
              </Typography>
            </CardContent>
            <CardContent className={classes.content}>
              <div className="row">
                <div className="col-2">                  
                  <p>30 year fixed</p>
                  <small className="color-grey">Rate type</small>
                </div>
                <div className="col-2">                  
                  <p>$1,424</p>
                  <small className="color-grey">Total fees</small>
                </div>
                <div className="col-2">                  
                  <p>1.29%</p>
                  <small className="color-grey">Initial rate</small>
                </div>
                <div className="col-2">                  
                  <p>5.14%</p>
                  <small className="color-grey">Follow on rate</small>
                </div>
                <div className="col-2">                  
                  <p>4.57%</p>
                  <small className="color-grey">APRC</small>
                </div>
                <div className="col-2">                  
                  <p>$17,810.09</p>
                  <small className="color-grey">True cost</small>
                </div>
              </div>
            </CardContent>
            <CardContent className={classes.footer}>
              <div className="row">
                <div className="col-6">
                  <span>More Information</span> <ArrowDownwardIcon className="arrow-down"/>
                </div>
                <div className="col-6">
                  <button className="float-right btn-green-outline m-1 p-2">Apply Now</button>
                  <button className="float-right btn-green-full m-1 p-2">Full Mortgage</button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
      <div className="box mt-3">
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.header}>
              <Typography component="h5" variant="h5">
                <img src='/unicredit-logo.jpg' className='credit-logo' alt='credit' /> UniCredit Bank
                <span className="float-right pt-3">
                  $682.75 <small className="color-grey">Monthly payment</small>
                </span>
              </Typography>
            </CardContent>
            <CardContent className={classes.content}>
              <div className="row">
                <div className="col-2">                  
                  <p>30 year fixed</p>
                  <small className="color-grey">Rate type</small>
                </div>
                <div className="col-2">                  
                  <p>$1,424</p>
                  <small className="color-grey">Total fees</small>
                </div>
                <div className="col-2">                  
                  <p>1.29%</p>
                  <small className="color-grey">Initial rate</small>
                </div>
                <div className="col-2">                  
                  <p>5.14%</p>
                  <small className="color-grey">Follow on rate</small>
                </div>
                <div className="col-2">                  
                  <p>4.57%</p>
                  <small className="color-grey">APRC</small>
                </div>
                <div className="col-2">                  
                  <p>$17,810.09</p>
                  <small className="color-grey">True cost</small>
                </div>
              </div>
            </CardContent>
            <CardContent className={classes.footer}>
              <div className="row">
                <div className="col-6">
                  <span>More Information</span> <ArrowDownwardIcon className="arrow-down"/>
                </div>
                <div className="col-6">
                  <button className="float-right btn-green-outline m-1 p-2">Apply Now</button>
                  <button className="float-right btn-green-full m-1 p-2">Full Mortgage</button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Result;

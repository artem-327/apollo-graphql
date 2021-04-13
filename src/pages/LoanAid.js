import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Slider from '@material-ui/core/Slider';
import Link from '@material-ui/core/Link';
import { makeVar } from '@apollo/client';

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  detailsLeft: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%'
  },
  detailsRight: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    backgroundColor: '#eee'
  },
  content: {
    width: '100%'
  },
  controls: {
    paddingLeft: "30px",
    paddingBottom: "30px",
    paddingRight: "30px",
  },
  header: {
    paddingLeft: "50px",
    paddingTop: "50px"
  }
}));

const homePrice = makeVar('');
const downPayment = makeVar('');
const monthDuration = makeVar('');
const estimatedPayment = makeVar('');
const typeLoan = makeVar('');
const currencyType = makeVar('');

function LoanAid () {
  const classes = useStyles();

  homePrice('200');

  return (
    <div className="container">
      <h1 className="text-center mt-5">Calculate and Compare Your Loans</h1>
      <p className="mt-3 text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <div className="box">
        <Card className={classes.root}>
          <div className={classes.detailsLeft}>
            <CardContent className={classes.header}>
              <Typography component="h5" variant="h5">
                <span className="phone-icon"><PhoneIphoneIcon/></span> <span>New Loan Application</span>
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <CardContent className={classes.content}>
                <div className="row">
                  <div className="col col-lg-5 col-md-6 col-sm-6 col-xs-12">
                    Type of Loan
                    <select className="form-control loan-type mt-2">
                      <option value="st">Standard</option>
                      <option value="sp">Special</option>
                    </select>
                  </div>
                  <div className="col col-lg-1 col-md-1 col-sm-2 col-xs-4 pt-cur"><span className="active">USD</span></div>
                  <div className="col col-lg-1 col-md-1 col-sm-2 col-xs-4 pt-cur"><span className="">EUR</span></div>
                  <div className="col col-lg-1 col-md-1 col-sm-2 col-xs-4 pt-cur"><span>GBP</span></div>
                </div>
              </CardContent>
              <CardContent className={classes.content}>
                Home Price
                <div className="row">
                  <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={200} min={50} max={500} onChange={e=>{homePrice(e.target.textContent)}} />
                    <span>$ 50</span>
                    <span className="float-right">$ 500</span>
                  </div>
                  <div className="col col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <input className="form-control" value={homePrice()} readOnly />  
                  </div>
                </div>
              </CardContent>
              <CardContent className={classes.content}>
                Down Payment (20%)
                <div className="row">
                  <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} min={10} max={100} />
                    <span>$ 10</span>
                    <span className="float-right">$ 100</span>
                  </div>
                  <div className="col col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <input className="form-control" />  
                  </div>
                </div>
              </CardContent>
              <CardContent className={classes.content}>
                Duration in Months
                <div className="row">
                  <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} min={0} max={240} />
                    <span>20 months</span>
                    <span className="float-right">240 months</span>
                  </div>
                  <div className="col col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <input className="form-control" />  
                  </div>
                </div>
              </CardContent>
              <CardContent>
                <Link className="btn btn-green full-width" href="/result" >GET REAL MORTGAGE OFFER</Link>
              </CardContent>
              <CardContent>
                <div className="text-center">
                  <small>Not looking for a loan? You are a service provider?</small><br/>
                  <small>(bank, notory, appraiser, loan officer, etc)</small> <Link href="/" className="sign-up">sign up here</Link>
                </div>
              </CardContent>
            </div>
          </div>
          <div className={classes.detailsRight}>
            <div className="text-center">
              <CardContent>
                <div className="text-center estimate-top">
                  <p className="estimate-header">Estimated Payment</p>
                  <h1>$ 3,382<span className="estimate-month">/month</span></h1>
                </div>
              </CardContent>
              <CardContent>
                <div className="text-center estimate-body">
                  <p className="estimate-header">Loan amount</p>
                  <h4>$ 100.000</h4>
                </div>
              </CardContent>
              <CardContent>
                <div className="text-center estimate-body">
                  <p className="estimate-header">Down payment</p>
                  <h4>$ 20.000</h4>
                </div>
              </CardContent>
              <CardContent>
                <div className="text-center estimate-body">
                  <p className="estimate-header">Loan term</p>
                  <h4>2 years</h4>
                </div>
              </CardContent>
              <CardContent>
                <div className="text-center estimate-body">
                  <p className="estimate-header">Property tax</p>
                  <h4>1.2% / year</h4>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoanAid;

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import Review from './components/layout/Review';
import Footer from './components/layout/Footer';
import IphoneUnlockPage from './pages/IphoneUnlockPage';
import NetworkCheckPage from './pages/NetworkCheckPage';
import UnlockStatusPage from './pages/UnlockStatusPage';
import IcloudUnlockPage from './pages/IcloudUnlockPage';
import ImeiCheckPage from './pages/ImeiCheckPage';
import ShopPage from './pages/ShopPage';
import RepairPage from './pages/RepairPage';
import CheckoutPage from './pages/CheckoutPage';
import BlogPage from './pages/BlogPage';
import ResellerPage from './pages/ResellerPage';

import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <Fragment>
                <HomePage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/network-check'
            render={props => (
              <Fragment>
                <NetworkCheckPage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/unlock-status'
            render={props => (
              <Fragment>
                <UnlockStatusPage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/icloud-unlock'
            render={props => (
              <Fragment>
                <IcloudUnlockPage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/blog'
            render={props => (
              <Fragment>
                <BlogPage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/pricing'
            render={props => (
              <Fragment>
                <PricingPage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/checkout'
            render={props => (
              <Fragment>
                <CheckoutPage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/about'
            render={props => (
              <Fragment>
                <AboutPage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/imei-check'
            render={props => (
              <Fragment>
                <ImeiCheckPage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/iphone-unlock'
            render={props => (
              <Fragment>
                <IphoneUnlockPage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/shop'
            render={props => (
              <Fragment>
                <ShopPage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/repair'
            render={props => (
              <Fragment>
                <RepairPage />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/reseller'
            render={props => (
              <Fragment>
                <ResellerPage />
              </Fragment>
            )}
          />
        </Switch>
        <Review />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

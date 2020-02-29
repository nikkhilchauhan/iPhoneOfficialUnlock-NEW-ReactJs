import React from 'react';
import { Link } from 'react-router-dom';
import Mainlogo from '../../img/main-logo.png';
import facebookLogo from '../../img/facebook-logo.svg';
import instagramLogo from '../../img/instagram-logo.png';
import twitterLogo from '../../img/twitter-logo.png';

const Navbar = () => {
  return (
    <div>
      <div className='topbar'>
        <div className='container-default'>
          <div className='row'>
            <div className='left-side'>
              <p
                className='text-white lead'
                style={{ marginTop: '2px', fontSize: '18px' }}
              >
                <i className='fas fa-phone-alt'></i> +91-8080808080 |{' '}
                <i className='fas fa-envelope-open-text'></i> (24/7 Available) |{' '}
                <i className='fas fa-user'></i> Live chat with a person
              </p>
            </div>
            <div className='right-side socialTop text-white'>
              <img
                className='ml-2'
                src={facebookLogo}
                alt=''
                style={{ width: '25px', height: '25px', marginTop: '2px' }}
              />

              <img
                className='ml-2'
                src={instagramLogo}
                alt=''
                style={{ width: '25px', height: '25px', marginTop: '2px' }}
              />
              <img
                className='ml-2'
                src={twitterLogo}
                alt=''
                style={{ width: '25px', height: '25px', marginTop: '2px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='sticky-header'>
        <div className='container-default'>
          <div className='left-side'>
            <Link to='/'>
              <img
                src={Mainlogo}
                alt='iPhoneOfficialUnlock'
                style={{ width: '210px' }}
              />
            </Link>
          </div>
          <div className='right-side'>
            <Link to='/'>Home</Link>
            <Link to='/network-check'>Network Check</Link>
            <Link to='/unlock-status'>Unlock Status</Link>
            <Link to='/icloud-unlock'>iCloud Unlock</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/reseller'>Reseller</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/repair'>Repair</Link>
            <Link to='/'>
              <i className='fas fa-shopping-basket'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

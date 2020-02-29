import React, { Fragment } from 'react';
import appStore from '../../img/appStore.png';
import playStore from '../../img/playStore.png';

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className='container my-3'>
          <div className='row'>
            <div className='col-md-4 col-sm-12 col-xs-12'>
              <p className='hidden-xs'>Helpful links</p>
              <ul className='list-unstyled'>
                <li className='list-title'>Phone</li>
                <li>
                  <i className='fa fa-phone'></i>
                  <span>+44 (0)8282828828</span>
                </li>
                <li className='list-title hidden-xs'>Email</li>
                <li>
                  <i className='fa fa-envelope'></i>
                  <span> support@iphoneofficialunlock.com</span>
                </li>
              </ul>
            </div>

            <div className='col-md-8 col-sm-12 col-xs-12'>
              <div className='row'>
                <div className='col-sm-4 col-xs-12'>
                  <h4 className='hidden-xs'>&nbsp;</h4>
                  <ul className='list-unstyled'>
                    <li>
                      <a href='/about' title='Search Support'>
                        About
                      </a>
                    </li>
                    <li>
                      <a href='/icloud-unlock' title='Search Support'>
                        iCloud Unlock
                      </a>
                    </li>
                    <li>
                      <a href='/unlock-status' title='Unlock iPhone'>
                        Unlock status
                      </a>
                    </li>
                    <li>
                      <a href='/faq' title='Frequently Asked Questions'>
                        Frequently Asked Questions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-4 col-xs-12'>
                  <h4 className='hidden-xs'>&nbsp;</h4>
                  <ul className='list-unstyled'>
                    <li>
                      <a href='/disclaimer' title='Search Support'>
                        Disclaimer
                      </a>
                    </li>{' '}
                    <li>
                      <a href='/refund-policy' title='Search Support'>
                        Refund policy
                      </a>
                    </li>
                    <li>
                      <a href='/privacy-policy' title='Unlock iPhone'>
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a
                        href='/terms-conditions'
                        title='Frequently Asked Questions'
                      >
                        Terms & conditions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-sm-4 col-xs-12'>
                  <h4 className='hidden-xs'>&nbsp;</h4>
                  <img
                    src={playStore}
                    className='mb-1'
                    alt=''
                    style={{ width: '70%' }}
                  />

                  <img src={appStore} alt='' style={{ width: '70%' }} />
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className='row text-center'>
            iPhoneOfficialUnlock Operates In: USA • UK • Canada • Australia
            •Argentina • Bolivia • Brazil • Chile • France • India • Ireland•
            Mexico • Panama • Paraguay • Peru • Puerto Rico • Spain
          </div>
          <div className='row d-flex text-center'>
            <div className='col-12'>
              <p className='lead' style={{ fontSize: '15px' }}>
                Copyright ©2019 iPhoneOfficialUnlock.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;

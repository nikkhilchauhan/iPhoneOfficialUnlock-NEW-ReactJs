import React, { Fragment } from 'react';
import reseller from '../img/reseller.png';
import resellerCard from '../img/reseller-card.png';

export default function ResellerPage() {
  return (
    <Fragment>
      <div>
        <div className='pt-3 reseller-bg '>
          <div className='container'>
            <div className='row text-white'>
              <div className='col-lg-8'>
                <h1 className='text-white'>
                  Professional iPhone Unlocking Reseller Service
                </h1>
                <h4 className='text-white'>
                  Unlock the full potential of your business
                </h4>
                <ul>
                  <li>
                    <h5>
                      Our unlock platform was created for you and with the needs
                      of your business in mind
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Take advantage of discounts of up to 55% on all unlock and
                      phone check services
                    </h5>
                  </li>
                  <li>
                    <h5>
                      Multiple payment methods and the possibility of working in
                      your own currency.
                    </h5>
                  </li>
                </ul>
                <div className='row text-center'>
                  <div className='col-12'>
                    <a href='/reseller' className='btn btn-white btn-lg'>
                      Become Professional Reseller
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <img src={reseller} alt='' style={{ width: '90%' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='container box-pd-tp'>
          <div className='row'>
            <div className='col-lg-8'>
              <h5>
                iPhone unlocking by IMEI with full guarantees and the lowest
                prices
              </h5>
              <p className='lead'>
                Our multi-purpose web platform, iPhoneOfficialUnlock Pro, was
                created for you and with the needs of your business in mind.
                With its attractive design and intuitive navigation, you can
                sign up and be fully operational in less than five minutes with
                only an e-mail address and an internet connection.
              </p>
              <p className='lead'>
                Whether you are dedicated 100% to phone unlocking or looking to
                diversify and grow your business through additional revenue
                streams, doctorSIM Pro is the perfect partner for you.
              </p>
            </div>
            <div className='col-lg-4 text-center'>
              <img src={resellerCard} alt='' />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

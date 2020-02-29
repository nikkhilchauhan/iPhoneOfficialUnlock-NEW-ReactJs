import React, { Fragment } from 'react';
import Hero from '../img/hero.png';
import iphoneRed from '../img/iphone-red.png';
import ReactTypingEffect from 'react-typing-effect';

const HomePage = () => {
  return (
    <Fragment>
      <div>
        {/* Section#1 UnlockNow*/}
        <div className='row text-center bg-black d-flex justify-content-center pt-4'>
          <div className='col-12'>
            <p className='text-white' id='demo'>
              <ReactTypingEffect
                text='Welcome to the only LIVE Instant Unlocking Website in the World!'
                speed='10000ms'
                eraseDelay='5000ms'
              />
            </p>
            <h1 className='text-white'>iPhone Official Unlock™</h1>
            <a href='/iphone-unlock' className='btn btn-primary btn-lg mt-3'>
              iPhone Unlock
            </a>
            <br />
            <a href='/imei-check' className='btn btn-white btn-lg'>
              Free IMEI Check
            </a>
          </div>
          <div className='col-12'>
            <img src={Hero} alt='' style={{ width: '50%' }} />
          </div>
        </div>
        {/* Section#5 WeAreTheBest*/}
        <div className='row text-center p-5'>
          <div className='container box-pd-all '>
            <div className='row'>
              <div className='col-12'>
                <h3>Why choose us?</h3>
                <h2>Things That Made Us Best</h2>
              </div>
            </div>

            <div className='row'>
              <div className='col-xs-12 col-md-12 col-lg-4 my-3'>
                <div className='icon-round'>
                  <i className='fa fa-clock-o fa-2x'></i>
                </div>
                <strong>Instant Delivery</strong>
                <p>
                  Instant unlocking for most carrier networks. Instant reports
                  for all IMEI check’s for network carriers worldwide.
                </p>
              </div>
              <div className='col-xs-12 col-md-12 col-lg-4 my-3'>
                <div className='icon-round'>
                  <i className='fa fa-wrench fa-2x'></i>
                </div>
                <strong>Unlock Wirelessly</strong>
                <p>
                  Experienced Tech Team on and off call available in shifts
                  24/7, certified in all Apple® and Android products.
                </p>
              </div>
              <div className='col-xs-12 col-md-12 col-lg-4 my-3'>
                <div className='icon-round'>
                  <i className='fa fa-mobile-phone fa-2x'></i>
                </div>
                <strong>Intact Warranty & Safety</strong>
                <p>
                  Experienced Tech Team on and off call available in shifts
                  24/7, certified in all Apple® and Android products.
                </p>
              </div>
              <div className='col-xs-12 col-md-12 col-lg-4 my-3'>
                <div className='icon-round'>
                  <i className='fas fa-chart-line fa-2x'></i>
                </div>
                <strong>Live Monitoring</strong>
                <p>
                  View the progress of your unlock at any point with our live
                  unlock status tracking. Our fully automated platform enables
                  you to monitor the every stage.
                </p>
              </div>
              <div className='col-xs-12 col-md-12 col-lg-4 my-3'>
                <div className='icon-round'>
                  <i className='fas fa-unlock-alt fa-2x'></i>
                </div>
                <strong>Guaranteed Unlock</strong>
                <p>
                  We can unlock any device regardless of its status. If we are
                  unable to unlock your device, we offer a 100% money back & No
                  question asked.
                </p>
              </div>
              <div className='col-xs-12 col-md-12 col-lg-4 my-3'>
                <div className='icon-round'>
                  <i className='fas fa-plane fa-2x'></i>
                </div>
                <strong>Unlock Internationally</strong>
                <p>
                  Once you place order with us and make payment. You can track
                  at every stage, tracking details will be sent to your email
                  address.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Section#2 NetworkCheck*/}
        <div className='row text-center bg-light2'>
          <div className='container box-pd-all'>
            <div className='row d-flex justify-content-center'>
              <div className='col-12'>
                <i className='fa fa-signal fa-2x network-icon text-red mb-1'></i>
                <h2 className='mb-3'>Carrier Check</h2>
                <h3 className='mb-3'>From only $2.99</h3>
              </div>
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col-8'>
                <p className='mb-4'>
                  Use our quick and easy carrier check service if you do not
                  know the carrier that your cell phone is locked to. Remember
                  this information is important if we are unlocking your cell
                  phone.
                </p>
                <a href='/network-check' className='btn btn-default btn-lg'>
                  Check Now
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Section#8 SupportAllDevices */}
        <div className='row container-fluid px-4 text-center box-pd-tp all-device-bg'>
          <div className='col-xs-12 col-md-12 col-lg-7 my-auto'>
            <h1 className='text-white'>We support all Apple® devices</h1>
            <p className='text-white'>
              All iPhone models from 2G to the latest iPhone X, and also the
              iPod, iPad, Apple Watch, Macbooks and iMacs (for iCloud unlocks).
            </p>
            <a href='/iphone-unlock' className='btn btn-primary btn-lg mt-3'>
              Unlock Now
            </a>
          </div>
          <div className='col-xs-12 col-md-12 col-lg-5'>
            <img src={iphoneRed} alt='' style={{ width: '100%' }} />
          </div>
        </div>
        {/*Section#4 Benefits&VideoTuts*/}
        <div className='container box-pd-tp'>
          <div className='row d-flex justify-content-center mb-2'>
            <div className='col-8 text-center'>
              <h2 className='mb-4'>
                Instantly unlock your any Apple® device with iPhone Official
                Unlock.
              </h2>
              <p className='mb-4'>
                It's quick, easy and will instantly unlock any clean device to
                use on any carrier in any country.
              </p>
            </div>
            <div className='col-lg-6'>
              <b>
                <ul>
                  <h4 className='mb-3'>Benefits of Unlocking your device</h4>
                </ul>
                <ul>
                  <i className='fas fa-check fa-lg'></i> After unlocking you can
                  use your iPhone on any network provider in the world.
                </ul>
                <ul>
                  <i className='fas fa-check fa-lg'></i> Your iPhone remains
                  under Warranty.
                </ul>
                <ul>
                  <i className='fas fa-check fa-lg'></i> It's permanently
                  unlocked for life-time.
                </ul>
                <ul>
                  <i className='fas fa-check fa-lg'></i> Totally anonymous and
                  completely{' '}
                  <a href='./pages/Is unlocking legal-Q&A.html'>legal</a>.{' '}
                </ul>
                <ul>
                  <i className='fas fa-check fa-lg'></i> High resale value.
                </ul>
              </b>
            </div>
            <div className='col-lg-6'>
              <b>
                <ul>
                  <h4 className='mb-3'>Before you unlock your iPhone</h4>
                </ul>
                <ul>
                  <i className='fas fa-check fa-lg'></i> See that your device is
                  listed on our website.
                </ul>
                <ul>
                  <i className='fas fa-check fa-lg'></i> Make sure you know your
                  network provider, if not click{' '}
                  <a href='.network-icon' className='text-apple'>
                    here
                  </a>
                  .
                </ul>
                <ul>
                  <i className='fas fa-check fa-lg'></i> Check the compatibility
                  of the carrier you will use after unlocking your iPhone.
                </ul>
                <ul>
                  <i className='fas fa-check fa-lg'></i> You'll get 100% refund,
                  in case you want.
                </ul>
                <ul>
                  <i className='fas fa-check fa-lg'></i> Got questions?
                  <a href='./pages/faq.html' className='text-apple'>
                    {` `}
                    Read FAQ
                  </a>
                </ul>
              </b>
            </div>
          </div>
          <div className='row justify-content-center text-center'>
            <div className='col-12'>
              <h3 className='text-dark mb-3'>
                Need help? Watch Our Video Tutorial
              </h3>
            </div>
            <div className='col-12'>
              <div className='embed-responsive embed-responsive-16by9 shadow-sm'>
                <iframe
                  title='how-to-unlock-video-tutorial'
                  className='embed-responsive-item'
                  src='https://www.youtube.com/embed/eXCkrCsirco'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                >
                  <strong>Note:</strong> Your browser doesn't support "iframe".
                  Please updte this browser or switch to a modern browser.
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;

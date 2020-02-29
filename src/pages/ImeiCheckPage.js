import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import whylocked from '../img/why-locked.png';
import imeiCheck from '../img/imei-check.jpg';

export default function ImeiCheckPage() {
  const [text, setText] = useState('');
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    // console.log(this.state.text);
    if (text === '') {
      console.log('Please Enter Something');
    } else {
      console.log(text);
      setText('');
    }
  };
  return (
    <Fragment>
      <div>
        {/* Section#1 UnlockIphone*/}
        <div className='container box-pd-tp'>
          <div className='row'>
            <div className='col-lg-7 order-lg-12'>
              <div className='row'>
                <b className='ml-3'>
                  <a href='/' rel='noopener noreferrer' className='text-apple'>
                    - View Sample
                  </a>
                </b>
                <h1 className='ml-3'>
                  Just type in a IMEI number to get started.
                </h1>
                <p className='ml-3'>
                  This FREE service provides you instant information about your
                  device.
                </p>

                <div className='col-12'>
                  <div className='form-group' onSubmit={onSubmit}>
                    <input
                      type='text'
                      className='form-control'
                      data-val-required='Please enter your IMEI number'
                      id='imei'
                      name='IMEI'
                      placeholder='Enter IMEI Number'
                      value={text}
                      onChange={onChange}
                    />
                    <span
                      className='field-validation-valid'
                      data-valmsg-for='IMEI'
                      data-valmsg-replace='true'
                    ></span>
                    <p className='text-grey' style={{ marginTop: '10px' }}>
                      <small>
                        Dial *#060# on your iPhone to obtain your IMEI
                      </small>
                    </p>
                  </div>
                </div>
                <Link to='/imei-check' className='btn btn-red btn-lg ml-3'>
                  Free Check
                </Link>
              </div>
            </div>
            <div className='col-lg-5'>
              <img src={imeiCheck} alt='iPhone' style={{ width: '85%' }} />
            </div>
          </div>
        </div>
        {/* Section#2 StepsToUnlock*/}
        <div className='row text-center bg-light1'>
          <div className='container box-pd-all'>
            <div className='row'>
              <div className='col-12'>
                <h3>Unlock wirelessly</h3>
                <h2>In three simple steps with our unlocking service.</h2>
              </div>
            </div>

            <div className='row'>
              <div className='col-xs-12 col-md-12 col-lg-4 my-3'>
                <div className='step-number'>1</div>
                <strong>Enter your device details</strong>
                <p>
                  Select the model and carrier of the device you wish to unlock
                  and enter the IMEI or Serial number for the device.
                </p>
              </div>
              <div className='col-xs-12 col-md-12 col-lg-4 my-3'>
                <div className='step-number'>2</div>
                <strong>Process your unlock</strong>
                <p>
                  Your payment is received and your order is processed. Your
                  live tracking login is supplied within a confirmation email.
                </p>
              </div>
              <div className='col-xs-12 col-md-12 col-lg-4 my-3'>
                <div className='step-number'>3</div>
                <strong>Device Unlocked</strong>
                <p>
                  Your Apple® iPhone is unlocked. Confirmation of your Unlocking
                  Code will be sent to you via email.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Section#3 WhyLocked*/}
        <div className='bg-black box-pd-all'>
          <div className='container'>
            <div className='row d-flex justify-content-center text-center'>
              <div className='col-lg-6 order-lg-12'>
                <h1 className='text-white'>Why is my iPhone Locked?</h1>
                <p className='text-white'>
                  With the high prices commanded by modern iPhones carriers will
                  often lock their iPhones and offer them as part of a costly
                  contract with a lower up front cost, locking the iPhone offers
                  them higher chances you'll stay with them not only for the
                  full contract duration but beyond.
                </p>
                <p className='text-white'>
                  You are not legally obliged to keep your iPhone locked to one
                  carrier even if it's still under contract, though you must
                  continue to pay for the agreed contract duration. Having an
                  unlocked iPhone will allow you to shop around for a deal that
                  suits you, be that more data or better coverage, as well as
                  being able to avoid high roaming charges when travelling by
                  using a local SIM card.
                </p>
              </div>
              <div className='col-lg-6'>
                <img
                  src={whylocked}
                  style={{ width: '100%' }}
                  alt='why-locked'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

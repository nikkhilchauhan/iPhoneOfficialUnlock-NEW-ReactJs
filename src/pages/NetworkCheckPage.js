import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import apple from '../img/apple.jpg';
import whylocked from '../img/why-locked.png';
import networkCheck from '../img/network-check.jpg';

const NetworkCheckPage = () => {
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
              <img
                src={apple}
                alt='apple'
                style={{ width: '90px', height: '90px' }}
              />
              <div className='row'>
                <h1 className='ml-3'>Get to know your network better.</h1>
                <p className='ml-3'>
                  This service provides you instant information about the
                  network/carrier you iPhone is currently locked with.
                </p>
                <div className='col-12'>
                  <div className='form-group'>
                    <div className='input-group'>
                      <select
                        className='form-control'
                        data-val='true'
                        data-val-number='The field ModelId must be a number.'
                        data-val-required='Please select a model.'
                        id='ModelId'
                        name='ModelId'
                      >
                        <option value=''>Select Model</option>
                        <option value='112'>iPhone 11 Pro Max</option>
                        <option value='111'>iPhone 11 Pro</option>
                        <option value='110'>iPhone 11</option>
                        <option value='58'>iPhone XR</option>
                        <option value='57'>iPhone XS Max</option>
                        <option value='56'>iPhone XS</option>
                        <option value='16'>iPhone X</option>
                        <option value='6'>iPhone SE</option>
                        <option value='15'>iPhone 8 Plus</option>
                        <option value='14'>iPhone 8</option>
                        <option value='13'>iPhone 7 Plus</option>
                        <option value='12'>iPhone 7</option>
                        <option value='10'>iPhone 6S Plus</option>
                        <option value='9'>iPhone 6S</option>
                        <option value='8'>iPhone 6 Plus</option>
                        <option value='7'>iPhone 6</option>
                        <option value='5'>iPhone 5S</option>
                        <option value='4'>iPhone 5C</option>
                        <option value='3'>iPhone 5</option>
                        <option value='2'>iPhone 4S</option>
                        <option value='1'>iPhone 4</option>
                        <option value='59'>iPad All Models</option>
                        <option value='32'>Watch</option>
                      </select>
                    </div>
                  </div>
                </div>

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
                <Link to='/network-check' className='btn btn-red btn-lg ml-3'>
                  Check
                </Link>
              </div>
            </div>
            <div className='col-lg-5'>
              <img src={networkCheck} alt='iPhone' style={{ width: '100%' }} />
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
};

export default NetworkCheckPage;

import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import apple from '../img/apple.jpg';
import icloudUnlock from '../img/icloud-unlock.png';

export default function IcloudUnlockPage() {
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
                <h1 className='ml-3'>iCloud® Activation Lock™ removal.</h1>
                <p className='ml-3'>
                  Can’t remember your iCloud’s ID and password?. Brought a
                  second hand locked iPhone, iPad or iWatch and there is no way
                  to contact the previous owner of the device.
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
                  Unlock iCloud
                </Link>
              </div>
            </div>
            <div className='col-lg-5'>
              <img src={icloudUnlock} alt='iPhone' style={{ width: '100%' }} />
            </div>
          </div>
        </div>
        {/* Section#2 StepsToUnlock*/}
        <div className='row text-center bg-light1'>
          <div className='container box-pd-all'>
            <div className='row'>
              <div className='col-12'>
                <h2>What is iCloud Activation Lock?</h2>
              </div>
            </div>

            <div className='row d-flex justify-content-center'>
              <div className='col-10'>
                <p>
                  Apple introduced a feature called “iCloud Activation Lock”
                  which helps the user in protecting their personal data in
                  their iPhone, iPad or iWatch.
                </p>
                <p>
                  When the owner turns Find My iPhone on, iCloud activation lock
                  is activated. After that the device requires the owner’s Apple
                  ID and password before they can activate the device again,
                  this lock is enabled even after resetting the device.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Section#3 WhyLocked*/}
        <div className='bg-black box-pd-all'>
          <div className='container'>
            <div className='row d-flex justify-content-center text-center'>
              <div className='col-lg-6'>
                <h1 className='text-white'>iCloud unlocking legal or not?</h1>
                <p className='text-white'>
                  There were many news regarding the legality of the iCloud
                  unlock. It is stated that how the official process can be
                  misused by cyber-crime experts for criminal purposes. Advice
                  shared here is by no means to be taken on the legal note. It
                  is just a counter-opinion to the one stated by the original
                  reporter.
                </p>
                <p className='text-white'>
                  For starters, we should not directly conclude that iCloud
                  unlocking is illegal. Carrier Unlock is a type of unlock which
                  is different from an iCloud activation lock, that is a feature
                  present in Apple’s devices which allows a maximum of one
                  iCloud account with any of its iDevices.
                </p>
                <p className='text-white'>
                  When we are unable to access that iCloud account then it is
                  said to be iCloud-locked. This means, nobody but the original
                  iCloud account owner will have the access to the device. There
                  are tons of devices out there that are second-hand and locked.
                  There are many third-party service providers who are
                  authorized to unlock an iPhone’s iCloud activation lock.
                </p>
              </div>
              <div className='col-lg-6'>
                <img
                  src={icloudUnlock}
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

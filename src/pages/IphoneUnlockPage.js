import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import apple from '../img/apple.jpg';
import whylocked from '../img/why-locked.png';
import iphoneUnlock from '../img/iphone-unlock.png';

const IphoneUnlockPage = () => {
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
                <h1 className='ml-3'>Unlock iPhone by IMEI</h1>
                <p className='ml-3'>
                  Instantly unlock your iPhone and use any carrier. With our
                  online service you can safely and permanently unlock your
                  iPhone from the comfort of your home.
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
                <div className='col-sm-6 col-xs-12'>
                  <div className='form-group'>
                    <div className='input-group margin-right'>
                      <select
                        className='form-control valid'
                        id='CountryId'
                        name='CountryId'
                      >
                        <option value='11' data-value='AR'>
                          Argentina
                        </option>
                        <option value='14' data-value='AU'>
                          Australia
                        </option>
                        <option value='28' data-value='BO'>
                          Bolivia
                        </option>
                        <option value='32' data-value='BR'>
                          Brazil
                        </option>
                        <option value='44' data-value='CA'>
                          Canada
                        </option>
                        <option value='49' data-value='CL'>
                          Chile
                        </option>
                        <option value='53' data-value='CO'>
                          Colombia
                        </option>
                        <option value='58' data-value='CR'>
                          Costa Rica
                        </option>
                        <option value='67' data-value='DO'>
                          Dominican Republic
                        </option>
                        <option value='69' data-value='EC'>
                          Ecuador
                        </option>
                        <option value='70' data-value='EG'>
                          Egypt
                        </option>
                        <option value='71' data-value='SV'>
                          El Salvador
                        </option>
                        <option value='79' data-value='FR'>
                          France
                        </option>
                        <option value='87' data-value='DE'>
                          Germany
                        </option>
                        <option value='95' data-value='GT'>
                          Guatemala
                        </option>
                        <option value='101' data-value='HN'>
                          Honduras
                        </option>
                        <option value='105' data-value='IN'>
                          India
                        </option>
                        <option value='109' data-value='IE'>
                          Ireland
                        </option>
                        <option value='112' data-value='IT'>
                          Italy
                        </option>
                        <option value='114' data-value='JP'>
                          Japan
                        </option>
                        <option value='145' data-value='MX'>
                          Mexico
                        </option>
                        <option value='162' data-value='NI'>
                          Nicaragua
                        </option>
                        <option value='173' data-value='PA'>
                          Panama
                        </option>
                        <option value='176' data-value='PE'>
                          Peru
                        </option>
                        <option value='177' data-value='PH'>
                          Philippines
                        </option>
                        <option value='180' data-value='PT'>
                          Portugal
                        </option>
                        <option value='205' data-value='ES'>
                          Spain
                        </option>
                        <option value='217' data-value='CH'>
                          Switzerland
                        </option>
                        <option value='235' data-value='GB'>
                          United Kingdom
                        </option>
                        <option value='236' data-value='US' selected=''>
                          United States
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-xs-12'>
                  <div className='form-group'>
                    <div className='input-group margin-left'>
                      <select
                        className='form-control'
                        data-val='true'
                        data-val-number='The field NetworkId must be a number.'
                        data-val-required='Please select a carrier'
                        id='NetworkId'
                        name='NetworkId'
                      >
                        <option value=''>Select Carrier</option>
                        <option value='24'>Verizon USA</option>
                        <option value='13'>ATT USA</option>
                        <option value='22'>TMobile USA</option>
                        <option value='20'>Sprint USA</option>
                        <option value='17'>MetroPCS USA</option>
                        <option value='21'>StraightTalk USA</option>
                        <option value='19'>SimpleMobile USA</option>
                        <option value='14'>Cellcom USA</option>
                        <option value='15'>Cricket USA</option>
                        <option value='16'>GCI Wireless USA</option>
                        <option value='23'>Tracfone USA</option>
                        <option value='18'>Ntelos USA</option>
                        <option value='25'>Xfinity USA</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className='col-12'>
                  <div class='form-group'>
                    <input
                      type='text'
                      class='form-control'
                      data-val-required='Please enter your IMEI number'
                      id='imei'
                      name='IMEI'
                      placeholder='Enter IMEI Number'
                      value=''
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
                <Link to='/checkout' className='btn btn-red btn-lg ml-3'>
                  Unlock
                </Link>
              </div>
            </div>
            <div className='col-lg-5'>
              <img src={iphoneUnlock} alt='iPhone' style={{ width: '80%' }} />
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

export default IphoneUnlockPage;

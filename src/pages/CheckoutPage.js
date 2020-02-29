import React, { Fragment } from 'react';
import iphoneUnlock from '../img/iphone-unlock.png';
import paypalCheckout from '../img/paypal-checkout.png';

export default function CheckoutPage() {
  return (
    <Fragment>
      <div className=' bg-light box-pd-all'>
        <div className='container-default card py-3'>
          <div className='row p-3'>
            <h4>Checkout</h4>
          </div>
          <hr />
          <div className='row'>
            <div className='col-lg-7'>
              <form>
                <label for='inputFirstname'>Enter full name</label>

                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <input
                      type='text'
                      className='form-control'
                      id='inputEmail4'
                      placeholder='Enter full name'
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label for='inputFirstname'>Enter email</label>
                    <input
                      type='text'
                      className='form-control'
                      id='inputEmail4'
                      placeholder='Enter your email'
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <label for='inputFirstname'>Confirm email</label>
                    <input
                      type='text'
                      className='form-control'
                      id='inputEmail4'
                      placeholder='Confirm your email'
                    />
                  </div>
                </div>
                <label for='inputAddress'>Billing Address</label>

                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='inputAddress'
                    placeholder='Address line 1'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    class='form-control'
                    id='inputAddress2'
                    placeholder='Address line 2'
                  />
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-5'>
                    <input
                      type='text'
                      class='form-control'
                      id='inputCity'
                      placeholder='City'
                    />
                  </div>
                  <div className='form-group col-md-4'>
                    <select id='inputState' class='form-control'>
                      <option selected>State</option>
                      <option>State A</option>
                      <option>State B</option>
                    </select>
                  </div>
                  <div className='form-group col-md-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='inputZip'
                      placeholder='Zip code'
                    />
                  </div>
                </div>
                <div className='form-group bg-light p-2'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='gridCheck'
                    />
                    <label className='form-check-label' for='gridCheck'>
                      By ticking this box you confirm you have read and
                      understood our Terms and Conditions and Privacy Policy
                      documents which explains the pre order service you have
                      chosen, a further charge may be applied depending on the
                      network/contract status of the device.
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-5'>
              <div className='card p-3'>
                <p>Order Summary</p>
                <h4>Total: $21.00</h4>
                <hr />
                <div className='row'>
                  <div className='col-lg-4'>
                    <img src={iphoneUnlock} alt='' style={{ width: '100%' }} />
                  </div>
                  <div className='col-lg-8'>
                    <b>
                      <h5>Phone Unlock</h5>
                    </b>
                    <p>iPhone8 plus - India</p>
                    <p>359211079082459</p>
                  </div>
                </div>
                <div className='row p-3'>
                  <p>Having coupon code?</p>
                  <div className='input-group'>
                    <input
                      className='form-control'
                      id='Code'
                      name='Code'
                      placeholder='Discount code'
                      type='text'
                    />
                    <button
                      type='button'
                      className='btn btn-red btn-sm ApplyDiscount'
                      style={{ paddingLeft: '5px', paddingRight: '5px' }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <div className='row d-flex justify-content-center'>
                  <img src={paypalCheckout} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
